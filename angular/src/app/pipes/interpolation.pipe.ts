import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interpolation'
})
export class InterpolationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const redRGB = {r: 255, g: 0, b: 0};
    const greenRGB = {r: 0, g: 255, b: 0};

    value =  (value + 1) / 2

    let newColort = {
      r: redRGB.r + (greenRGB.r - redRGB.r) * value,
      g: redRGB.g + (greenRGB.g - redRGB.g) * value,
      b: redRGB.b + (greenRGB.b - redRGB.b) * value,
    }

    const color = `rgb(${newColort.r}, ${newColort.g}, ${newColort.b})`;

    return color;
  }

}
