import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NoCommondComponent } from '../ventas/pages/no-commond/no-commond.component';
import { CommondComponent } from '../ventas/pages/commond/commond.component';
import { NumbersComponent } from '../ventas/pages/numbers/numbers.component';
import { SortedComponent } from '../ventas/pages/sorted/sorted.component';

const routes: Routes = [
  { path: 'commond', component: CommondComponent },
  { path: 'no-commond', component: NoCommondComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'sorted', component: SortedComponent },
  { path: '', redirectTo: '/commond', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: CommondComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
