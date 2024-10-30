import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DandelionApiService } from 'src/app/services/dandelion-api';
import { DetectedLang } from 'src/app/dto/dtos';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
})
export class LanguageDetectionComponent {

  dandelionService = inject(DandelionApiService)
  toaster = inject(ToastrService)

  detectedLanguages: DetectedLang[] = [];
  hasResults: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    const text = form.value.text;
    const clean = form.value.clean;

    this.dandelionService.getLanguageDetectionResults(text, clean).subscribe(
      (response) => {
        this.toaster.success("Data fetched successfully!");
        this.detectedLanguages = response.detectedLangs;
        this.hasResults = true;
      },
      (error) => {
        this.toaster.error(error.error.message, "Error");
        this.hasResults = false;
      }
    )

  }
}
