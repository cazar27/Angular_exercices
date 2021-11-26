import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router/app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localESMX from '@angular/common/locales/es-MX';
import localES from '@angular/common/locales/es';
import localEN from '@angular/common/locales/en-GB';
import localUS from '@angular/common/locales/en';
import localFrCA from '@angular/common/locales/fr-CA';
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localES );
registerLocaleData( localESMX );
registerLocaleData( localEN );
registerLocaleData( localUS );
registerLocaleData( localFrCA );
registerLocaleData( localFr );
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  exports: [],
  providers: [
    { provide: LOCALE_ID, useValue:'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
