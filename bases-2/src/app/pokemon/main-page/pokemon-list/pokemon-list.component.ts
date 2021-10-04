import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input('data') pokemons: Pokemon[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
