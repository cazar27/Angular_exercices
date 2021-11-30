import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { HeroRouting } from './hero-routing.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HomeHeroComponent,
    ListHeroComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroRouting
  ]
})
export class HerosModule { }
