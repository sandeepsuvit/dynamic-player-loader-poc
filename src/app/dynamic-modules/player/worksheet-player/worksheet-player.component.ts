import { Component, OnInit } from '@angular/core';
import { IWorksheetPlayer } from '../interfaces/worksheet-player.interface';
import { BasePlayerComponent } from '../base-player/base-player.component';

@Component({
  selector: 'app-worksheet-player',
  templateUrl: './worksheet-player.component.html',
  styleUrls: ['./worksheet-player.component.scss']
})
export class WorksheetPlayerComponent extends BasePlayerComponent implements OnInit {
  player: IWorksheetPlayer | any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
