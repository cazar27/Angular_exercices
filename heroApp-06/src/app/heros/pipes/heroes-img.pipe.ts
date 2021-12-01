import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from 'src/app/interfaces/hero.interfaces';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  transform(heroeImg: string, remote: boolean, nameImg: string ): string {
    return (remote) ? heroeImg! : `assets/heroes/${ nameImg }.jpg`!;
  }

}
