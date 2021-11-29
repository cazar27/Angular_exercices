import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule )
  },
  {
    path: 'heros',
    loadChildren: () => import('./heros/heros.module').then( module => module.HerosModule )
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
