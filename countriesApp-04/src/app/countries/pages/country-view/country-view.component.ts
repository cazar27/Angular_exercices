import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country, Name, CoatOfArms, Translation } from '../../interfaces/county.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss']
})
export class CountryViewComponent implements OnInit {

  private country!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private countrySrv: CountryService
  ) {
  }

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.countrySrv.searchCountry( id ) ),
      tap( console.log )
    )
    .subscribe( country => this.country = country[0] );
  }


  public get countryResp(): Country {
    return this.country;
  }

  public get name(): Name {
    return this.country.name;
  }

  public get flags(): CoatOfArms {
    return this.country.flags;
  }

  public get gMap(): string {
    return this.country.maps.googleMaps;
  }

  public get streetMap(): string {
    return this.country.maps.openStreetMaps;
  }

}
