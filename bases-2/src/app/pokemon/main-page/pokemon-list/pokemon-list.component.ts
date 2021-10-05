import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  //@Input('data') pokemons: Pokemon[] = [];
  get pokemons(): Pokemon[] {
    return this.pokemonService.returnPokemons;
  }

  constructor( private pokemonService: PokemonService ) {
  }

  ngOnInit(): void {
  }

}
