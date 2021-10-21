import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  // @Output() onPokemonNew: EventEmitter<Pokemon> = new EventEmitter();
  @Input() pokemonNew: Pokemon = {
    name: '',
    number: 0
  };

  constructor( private pokemonService: PokemonService ) { }

  addPokemon() {
    if(this.pokemonNew.name.trim().length === 0 ) { return; }
    this.pokemonService.addPokemon( this.pokemonNew );

    this.pokemonNew = {
      name: '',
      number: 0
    }
  }

  ngOnInit(): void {
  }

}
