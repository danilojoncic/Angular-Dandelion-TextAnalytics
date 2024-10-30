import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { EntityExtractionResponse, LanguageDetectionResponse, SentimentResponse, TextSimilarityResponse } from '../dto/dtos';
import { HistoryService } from './history';
import { environment } from 'src/env/final';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DandelionApiService {
  httpClient = inject(HttpClient)
  historyService = inject(HistoryService)
  cookieService = inject(CookieService)

  token = this.cookieService.get('token');

  private readonly nexUrl = environment.nexApi;
  private readonly simApi = environment.simApi;
  private readonly liApi = environment.liApi;
  private readonly sentApi = environment.sentApi;

  constructor() { }

  getEntityExtractionResults(min_confidence: string, include: string[], text: string): Observable<EntityExtractionResponse>{
    const includeString = include.join(",");
    const queryString = `${this.nexUrl}&text=${text}&min_confidence=${min_confidence}${includeString !== '' ? `&include=${includeString}` : ''}&token=${this.token}`;
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.historyService.pushToHistory(timestamp, "GET", queryString);

    return this.httpClient.get<EntityExtractionResponse>(queryString);
  }

  getTextSimilarityResults(text1: string, text2: string): Observable<TextSimilarityResponse>{
    const queryString = `${this.simApi}&text1=${text1}&text2=${text2}&token=${this.token}`;
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.historyService.pushToHistory(timestamp, "GET", queryString);

    return this.httpClient.get<TextSimilarityResponse>(queryString);
  }

  getLanguageDetectionResults(text: string, clean: boolean): Observable<LanguageDetectionResponse>{
    const queryString = `${this.liApi}?text=${text}&clean=${clean}&token=${this.token}`;
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.historyService.pushToHistory(timestamp, "GET", queryString);

    return this.httpClient.get<LanguageDetectionResponse>(queryString);
  }

  getSentimentAnalysisResults(text: string, lang: string): Observable<SentimentResponse>{
    const queryString = `${this.sentApi}?text=${text}&lang=${lang}&token=${this.token}`;
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.historyService.pushToHistory(timestamp, "GET", queryString);

    return this.httpClient.get<SentimentResponse>(queryString);
  }
}

