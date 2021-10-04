import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PokemonListComponent } from './main-page/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [MainPageComponent, PokemonListComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class PokemonModule {}
