import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons: Pokemon[] = [
    {
      name: 'Bulbasur',
      number: 1
    }
  ]

  constructor() {
    this._pokemons.push({name: "Charmander", number: 4});
    this._pokemons.push({name: "Squirtle", number: 7});
    this._pokemons.push({name: "Caterpie", number: 10});
  }

  get returnPokemons(): Pokemon [] {
    return [...this._pokemons];
  }

  addPokemon( data: Pokemon) {
    this._pokemons.push( data );
  }

}
