import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../interfaces/_base/player.interface';

@Component({
  selector: 'app-base-player',
  templateUrl: './base-player.component.html',
  styleUrls: ['./base-player.component.scss']
})
export class BasePlayerComponent implements OnInit {
  player: IPlayer | any;

  constructor() { }

  ngOnInit() {
  }

}
