import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pencertage'
})
export class PencertagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {return value * 100 + "%";}

}
