import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchersComponent } from './pages/switchers/switchers.component';


@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchersComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
