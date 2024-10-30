import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInputComponent } from './component/home/home.component';
import { EntityExtractionComponent } from './component/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './component/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './component/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './component/sentiment-analysis/sentiment-analysis.component';
import {HistoryModalComponent} from "./component/history-modal/history-modal.component";
import { tokenGuard } from './token.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeInputComponent,
  },
  {
    path: 'entity-extraction',
    component: EntityExtractionComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'text-similarity',
    component: TextSimilarityComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'language-detection',
    component: LanguageDetectionComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'sentiment-analysis',
    component: SentimentAnalysisComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'history',
    component: HistoryModalComponent,
    canActivate: [tokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
