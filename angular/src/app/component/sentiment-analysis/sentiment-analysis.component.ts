import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DandelionApiService } from 'src/app/services/dandelion-api';
import { SentimentResponse } from 'src/app/dto/dtos';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
})
export class SentimentAnalysisComponent {


  dandelionService = inject(DandelionApiService)
  sentimentResult: SentimentResponse = {} as SentimentResponse;
  hasResults: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const text = form.value.text;
    let lang = form.value.lang;

    lang = lang.split('-')[0].trim();

    this.dandelionService.getSentimentAnalysisResults(text, lang).subscribe(
      (response) => {
        this.sentimentResult = response;
        this.hasResults = true;
      },
      (error) => {
        this.hasResults = false;
      }
    )
  }
}
