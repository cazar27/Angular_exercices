import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddHeroComponent } from './heros/pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './heros/pages/search-hero/search-hero.component';
import { HomeHeroComponent } from './heros/pages/home-hero/home-hero.component';
import { ListHeroComponent } from './heros/pages/list-hero/list-hero.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AddHeroComponent,
    SearchHeroComponent,
    HomeHeroComponent,
    ListHeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
