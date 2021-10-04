import { Component, OnInit } from '@angular/core';

interface Pokemon {
  name: string,
  number: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  pokemonNew: Pokemon = {
    name: '',
    number: 0
  }

  pokemons: Pokemon[] = [
    {
      name: 'Bulbasur',
      number: 1
    }
  ]

  constructor() {
    this.pokemons.push({name: "Charmander", number: 4});
    this.pokemons.push({name: "Squirtle", number: 7});
    this.pokemons.push({name: "Caterpie", number: 10});
  }

  agregar() {
    if(this.pokemonNew.name.trim().length === 0 ) {
      return;
    }
    this.pokemons.push(this.pokemonNew);
    console.log(this.pokemonNew);
    this.pokemonNew = {
      name: '',
      number: 0
    }
  }

  changeName( evt: any ):void {
    evt.target.value;
  }

  ngOnInit(): void {
  }

}
