import { Component, OnInit } from '@angular/core';
import { IQuizPlayer } from '../interfaces/quiz-player.interface';
import { BasePlayerComponent } from '../base-player/base-player.component';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.scss']
})
export class QuizPlayerComponent extends BasePlayerComponent implements OnInit {
  player: IQuizPlayer | any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
