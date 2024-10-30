import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { inject } from '@angular/core';
import { DandelionApiService } from 'src/app/services/dandelion-api';
import { Annotation } from 'src/app/dto/dtos';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
})
export class EntityExtractionComponent {

  dandelionService = inject(DandelionApiService)
  toaster = inject(ToastrService)

  entities: Annotation[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    // extract values from form
    const min_confidence = form.value.min_confidence;
    const image = form.value.image ? "image" : "";
    const abstract = form.value.abstract ? "abstract" : "";
    const categories = form.value.categories ? "categories" : "";
    const text = form.value.text;
    let include = [image, abstract, categories];

    //!remove empty strings from include array
    include = include.filter((item) => item != "");

    this.dandelionService.getEntityExtractionResults(min_confidence, include, text).subscribe(
      (response) => {
        this.entities = response.annotations;
        this.toaster.success("Data fetched successfully!");
      },
      (error) => {
        this.toaster.error(error.error.message, "Error");
      }
    )
  }
}
