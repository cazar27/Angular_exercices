import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { SwitchersComponent } from './pages/switchers/switchers.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';


@NgModule({
  declarations: [
    BasicsComponent,
    SwitchersComponent,
    DynamicsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
