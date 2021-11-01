import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/county.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1//';

  constructor( private http: HttpClient ) { }

  searchCountries( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url );
  }

  searchRegion( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>( url );
  }

  searchCapital( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>( url );
  }

  searchCountry( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country[]>( url );
  }

}
