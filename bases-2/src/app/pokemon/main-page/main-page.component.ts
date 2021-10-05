import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../services/pokemon.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  pokemons: Pokemon[] = [];

  pokemonNew: Pokemon = {
    name: '',
    number: 0
  }

  constructor() {}

  ngOnInit(): void { }

}
