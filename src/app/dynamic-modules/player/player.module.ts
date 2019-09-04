import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { PlayerComponent } from './player.component';
import { EbookPlayerComponent } from './ebook-player/ebook-player.component';
import { WorksheetPlayerComponent } from './worksheet-player/worksheet-player.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { BasePlayerComponent } from './base-player/base-player.component';

@NgModule({
  declarations: [
    PlayerComponent,
    EbookPlayerComponent,
    WorksheetPlayerComponent,
    QuizPlayerComponent,
    BasePlayerComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentLoaderModule.forChild(PlayerComponent)
  ],
  entryComponents: [
    EbookPlayerComponent,
    WorksheetPlayerComponent,
    QuizPlayerComponent,
  ]
})
export class PlayerModule { }
