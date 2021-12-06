import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryViewComponent } from './pages/country-view/country-view.component';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountriesSuggestionComponent } from './components/countries-suggestion/countries-suggestion.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryViewComponent,
    CountriesTableComponent,
    CountryInputComponent,
    CountriesSuggestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryViewComponent,
    CountriesTableComponent,
    CountriesSuggestionComponent
  ]
})

export class CountryModule { }
