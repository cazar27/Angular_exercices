import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'Mayus'
})
export class MayusPipe implements PipeTransform {
  transform(value: string, option: boolean): string {
    return (option) ? value.toUpperCase() : value.toLowerCase();
  }

}
