import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DandelionApiService } from 'src/app/services/dandelion-api';
@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
})
export class TextSimilarityComponent {

  dandelionService = inject(DandelionApiService)
  toaster = inject(ToastrService)

  similarity: number = 0;
  hasResults: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    const text1 = form.value.text1;
    const text2 = form.value.text2;

    this.dandelionService.getTextSimilarityResults(text1, text2).subscribe(
      (response) => {
        this.similarity = +(response.similarity * 100).toFixed(2);
        this.hasResults = true;
        this.toaster.success("Data fetched successfully!");
      },
      (error) => {
        this.hasResults = false;
        this.toaster.error("Error while fetching data from Dandelion API!");
      }
    )
  }
}
