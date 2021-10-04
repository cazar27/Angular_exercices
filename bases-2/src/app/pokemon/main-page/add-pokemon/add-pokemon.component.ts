import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];
  @Input() pokemonNew: Pokemon = {name:"", number: 0};

  constructor() { }

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

  ngOnInit(): void {
  }

}
