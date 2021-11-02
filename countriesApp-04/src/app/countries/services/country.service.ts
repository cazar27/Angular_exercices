import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/county.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  private get params(): HttpParams {
    return new HttpParams().set('fields','name,region,population,capital,cca2,cca3,flags');
  }

  constructor( private http: HttpClient ) { }

  searchCountries( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${param}`;
    return this.http.get<Country[]>( url , { params: this.params} );
  }

  searchRegion( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${param}`;
    return this.http.get<Country[]>( url , { params: this.params} );
  }

  searchCapital( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${param}`;
    return this.http.get<Country[]>( url , { params: this.params} );
  }

  searchCountry( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${param}`;
    return this.http.get<Country[]>( url );
  }

}
