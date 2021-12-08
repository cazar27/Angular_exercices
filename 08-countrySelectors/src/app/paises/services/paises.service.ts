import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { combineLatest, Observable, of } from 'rxjs';

import { Country } from '../interfaces/county.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.com/v3.1/'
  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions(): string[] {
    return [ ...this._regions ];
  }

  private get params(): HttpParams {
    return new HttpParams().set('fields','name,borders,region,population,capital,cca2,cca3,flags');
  }

  constructor( private http: HttpClient ) { }

  getCountriesByRegion( param: string ): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${param}`;
    return this.http.get<Country[]>( url , { params: this.params } );
  }

  getCountry( code: string ): Observable<Country | null> {

    if ( !code ) {
      return of(null)
    }

    const url = `${ this.baseUrl }/alpha/${ code }`;
    return this.http.get<Country>( url , { params: this.params });
  }

  getCountrySmall( code: string ): Observable<Country> {
    const url = `${ this.baseUrl }/alpha/${ code }`;
    return this.http.get<Country>( url, { params: this.params} );
  }

  getCountries( borders: string[] ): Observable<Country[]> {
    if ( !borders ) {
      return of([]);
    }

    const peticiones: Observable<Country>[] = [];

    borders.forEach( code => {
      const peticion = this.getCountrySmall(code);
      peticiones.push( peticion );
    });
    return combineLatest( peticiones );

  }


}
