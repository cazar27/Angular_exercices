import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchersComponent } from './pages/switchers/switchers.component';

const routes: Routes = [
  {
    path: '',
    children:  [
      {
        path: 'basics', component: BasicsComponent
      },
      {
        path: 'dynamics', component: DynamicsComponent
      },
      {
        path: 'switchers', component: SwitchersComponent
      },
      {
        path: '**', redirectTo: 'basics'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule { }
