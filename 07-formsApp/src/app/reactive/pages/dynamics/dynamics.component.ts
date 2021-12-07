import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  name: string;
  favs: Favorito[]
}

interface Favorito {
  id: number,
  name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  @ViewChild('myForm') miForm!: NgForm | undefined;
  public newFav: string = '';

  public persona: Persona = {
    name: 'Carlos',
    favs: [
      {
        id: 1,
        name: 'padel'
      },
      {
        id: 1,
        name: 'videojuegos'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  public save() {

  }

  public add() {
    const fav : Favorito = {
      id: this.persona.favs.length + 1,
      name: this.newFav
    }

    this.persona.favs.push(fav);
  }

  public delete(index: number) {
    this.persona.favs.splice(index,1)
  }

  public validName():boolean {
    if( this.miForm?.controls ) {
      return this.miForm.controls['name'].invalid
        && this.miForm.controls['name'].touched;
    }
    return false;
  }

}
