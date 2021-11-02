import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/county.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor( private http: HttpClient ) { }

  searchCountries( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${param}`;
    return this.http.get<Country[]>( url );
  }

  searchRegion( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${param}`;
    return this.http.get<Country[]>( url );
  }

  searchCapital( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${param}`;
    return this.http.get<Country[]>( url );
  }

  searchCountry( param: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${param}`;
    return this.http.get<Country[]>( url );
  }

}
