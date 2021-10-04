import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PokemonListComponent } from './main-page/pokemon-list/pokemon-list.component';
import { AddPokemonComponent } from './main-page/add-pokemon/add-pokemon.component';

@NgModule({
  declarations: [MainPageComponent, PokemonListComponent, AddPokemonComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class PokemonModule {}
