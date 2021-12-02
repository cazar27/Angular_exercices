import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { HeroRouting } from './hero-routing.module';
import { MaterialModule } from '../material/material.module';
import { CardHeroComponent } from './pages/card-hero/card-hero.component';
import { ImagenPipe } from './pipes/heroes-img.pipe';
import { DetailHeroComponent } from './pages/detail-hero/detail-hero.component';
@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HomeHeroComponent,
    ImagenPipe,
    ListHeroComponent,
    CardHeroComponent,
    DetailHeroComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroRouting
  ]
})
export class HerosModule { }
