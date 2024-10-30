import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeInputComponent } from './component/home/home.component';
import { HistoryModalComponent } from './component/history-modal/history-modal.component';
import { EntityExtractionComponent } from './component/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './component/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './component/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './component/sentiment-analysis/sentiment-analysis.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityCardComponent } from './component/entity-extraction/entity-card/entity-card.component';
import { EntityModalComponent } from './component/entity-extraction/entity-modal/entity-modal.component';
import { PencertagePipe } from './pipes/percent.pipe';
import { InterpolationPipe } from './pipes/interpolation.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeInputComponent,
    HistoryModalComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    EntityCardComponent,
    EntityModalComponent,
    PencertagePipe,
    InterpolationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
