import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { DialogComponent } from './dynamic-modules/dialog/dialog.component';
import { MessageComponent } from './dynamic-modules/message/message.component';
import { PlayerComponent } from './dynamic-modules/player/player.component';
import { PlayerTypesEnum } from './dynamic-modules/player/enums/player-types.enum';
import { IPlayer } from './dynamic-modules/player/interfaces/_base/player.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Ignore this
  @ViewChild('testOutlet', { read: ViewContainerRef, static: true })
  testOutlet: ViewContainerRef | undefined;

  // Load multiple player instances here
  @ViewChild('playerOutlet', { read: ViewContainerRef, static: true })
  playerOutlet: ViewContainerRef | undefined;

  PLAYER_TYPE_REF = PlayerTypesEnum;

  // Fake data
  playlist: IPlayer[] = [
    { type: PlayerTypesEnum.EBOOK, data: { title: 'Ebook 1' } },
    { type: PlayerTypesEnum.WORKSHEET, data: { title: 'Worksheet 1' } },
    { type: PlayerTypesEnum.QUIZ, data: { title: 'Quiz 1' } },
    { type: PlayerTypesEnum.WORKSHEET, data: { title: 'Worksheet 2' } },
  ];

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
    private dialog: MatDialog
  ) {}

  // Ignore this
  loadComponent() {
    this.dynamicComponentLoader
      .getComponentFactory<MessageComponent>('message')
      .subscribe({
        next: componentFactory => {
          if (!this.testOutlet) {
            return;
          }

          const ref = this.testOutlet.createComponent(componentFactory);
          ref.changeDetectorRef.detectChanges();
        },
        error: err => {
          console.warn(err);
        }
      });
  }
  // Ignore this
  showDialog() {
    this.dialog.open(DialogComponent);
  }

  /**
   * Method to load player based on type
   *
   * @param {string} type
   * @memberof AppComponent
   */
  loadPlayer(player: IPlayer) {
    this.dynamicComponentLoader
      .getComponentFactory<PlayerComponent>('player')
      .subscribe({
        next: componentFactory => {
          if (!this.playerOutlet) {
            return;
          }

          // Create the component dynamically
          const ref = this.playerOutlet.createComponent(componentFactory);
          const instance = (ref.instance as PlayerComponent);
          instance.playerRef = player; // Assign the type of player to load

          ref.changeDetectorRef.detectChanges();
        },
        error: err => console.warn(err)
      });
  }
}
