import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Hero, Publisher } from 'src/app/interfaces/hero.interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  public id = '';
  public title = "Añadir Nuevo Heroe";
  public heroe: Hero | undefined = {
    id: this.id,
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    img: '',
    img_face: ''
  };

  public publisherList: Publisher[] = [Publisher.DCComics, Publisher.MarvelComics];

  constructor(
    private dataServ: DataService,
    private router : Router,
    private activeRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.activeRoute.params) {

      this.activeRoute.params.subscribe(
        ({id}) => {
          this.id = id;
          this.dataServ.getItem(id).subscribe(
            heroe => {
              this.heroe = heroe
                .find( heroe => heroe.id == id);
                this.title = "Actualizar Heroe";
            }
          );
        }
      )
    }
  }

  public save(): void {
    if(this.heroe) {
      this.add(this.heroe);
      console.log(this.heroe)
    }
  }

  public back() {
    this.router.navigate(['/heroes/list']);
  }

  public add(heroe: Hero): void {
    if(this.id && this.heroe) {
      this.dataServ.setItem(this.id, this.heroe);
      this.showSnackbar('el heroe ' + this.heroe.superhero + ' quedo actualizado')
    } else {
      this.id = heroe.publisher.slice(0,2) + '-' + heroe.superhero;
      heroe.id = this.id.toLowerCase();
      this.dataServ.addItem(heroe.id, heroe);
      this.showSnackbar('el heroe ' + this.heroe?.superhero + ' quedo añadido')
    }
    this.router.navigate(['/heroes/list/']);
  }

  public showSnackbar( mensaje: string ) {

    this._snackBar.open(mensaje, 'Aceptar',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    })

  }

}
