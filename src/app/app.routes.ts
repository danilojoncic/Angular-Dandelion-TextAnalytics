import { Routes } from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {SentimentAnalysisComponent} from './sentiment-analysis/sentiment-analysis.component';
import {LanguageDetectionComponent} from './language-detection/language-detection.component';
import {TextSimilarityComponent} from './text-similarity/text-similarity.component';
import {EntityExtractionComponent} from './entity-extraction/entity-extraction.component';
import {TokenComponent} from './token/token.component';

export const routes: Routes = [
  { path: '', redirectTo: '/token', pathMatch: 'full' },
  { path: 'token', component: TokenComponent },
  { path: 'entity-extraction', component: EntityExtractionComponent },
  { path: 'text-similarity', component: TextSimilarityComponent },
  { path: 'language-detection', component: LanguageDetectionComponent },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent },
  { path: 'history', component: HistoryComponent }
];
