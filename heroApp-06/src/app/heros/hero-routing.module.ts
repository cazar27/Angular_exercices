import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';

const routes: Routes = [
  {
    path: '',
    component: HomeHeroComponent,
    children: [
      {
        path: 'list',
        component: ListHeroComponent
      },
      {
        path: 'add',
        component: AddHeroComponent
      },
      {
        path: 'edit/:id',
        component: AddHeroComponent
      },
      {
        path: 'search',
        component: SearchHeroComponent
      },
      {
        path: ':id',
        component: HomeHeroComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( routes)],
  exports: [RouterModule]
})
export class HeroRouting { }
