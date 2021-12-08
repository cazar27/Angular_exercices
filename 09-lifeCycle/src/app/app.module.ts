import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    MuestraNombreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
