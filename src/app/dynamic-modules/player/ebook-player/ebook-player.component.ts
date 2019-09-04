import { Component, OnInit } from '@angular/core';
import { IEbookPlayer } from '../interfaces/ebook-player.interface';
import { BasePlayerComponent } from '../base-player/base-player.component';

@Component({
  selector: 'app-ebook-player',
  templateUrl: './ebook-player.component.html',
  styleUrls: ['./ebook-player.component.scss']
})
export class EbookPlayerComponent extends BasePlayerComponent implements OnInit {
  player: IEbookPlayer | any;

  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.player);
  }

}
