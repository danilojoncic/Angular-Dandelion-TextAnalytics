import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Annotation } from 'src/app/dto/dtos';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
})
export class EntityCardComponent {

    @Input() entity: Annotation = {} as Annotation;
    constructor() { }

    ngOnInit(): void {
    }
}
