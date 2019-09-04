import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy, ComponentRef } from '@angular/core';
import { EbookPlayerComponent } from './ebook-player/ebook-player.component';
import { WorksheetPlayerComponent } from './worksheet-player/worksheet-player.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { PlayerTypesEnum } from './enums/player-types.enum';
import { BasePlayerComponent } from './base-player/base-player.component';
import { IPlayer } from './interfaces/_base/player.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  playerRef: IPlayer | any;

  @ViewChild('playerRenderer', { static: true, read: ViewContainerRef })
  private playerRenderer: ViewContainerRef | any;

  componentRef: ComponentRef<any> | any;

  // Component mapper
  readonly templateMapper = {
    ebook: EbookPlayerComponent,
    worksheet: WorksheetPlayerComponent,
    quiz: QuizPlayerComponent,
  };

  constructor(
    private cfResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this._loadComponent(this.playerRef);
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  /**
   * Get the component by type
   *
   * @private
   * @param {PlayerTypesEnum} type
   * @returns
   * @memberof PlayerComponent
   */
  private _getComponent(type: PlayerTypesEnum) {
    return this.templateMapper[type];
  }

  /**
   * Load the component on the refernce container
   *
   * @private
   * @param {IPlayer} player
   * @memberof PlayerComponent
   */
  private _loadComponent(player: IPlayer) {
    const componentFactory = this.cfResolver.resolveComponentFactory(this._getComponent(player.type));
    // this.bdsRendRef.clear();
    this.playerRenderer.remove();
    // Create the component
    this.componentRef = this.playerRenderer.createComponent(componentFactory);
    // Get the reference to the base player component
    const compInstance = (this.componentRef.instance as BasePlayerComponent);
    // Pass data to the base
    compInstance.player = player;
    // Used to removing the component from the dom
    compInstance.parentCntRef = this.playerRenderer;
  }

}
