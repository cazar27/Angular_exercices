import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { CountryViewComponent } from './countries/pages/country-view/country-view.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'by-capital',
    component: ByCapitalComponent
  },
  {
    path: 'by-region',
    component: ByRegionComponent
  },
  {
    path: 'by-country',
    component: ByCountryComponent
  },
  {
    path: 'by-country/:id',
    component: CountryViewComponent
  },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
