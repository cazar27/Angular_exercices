import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { AuthResponse } from 'src/app/auth/interfaces/authResponse.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _usuario!: User;

  constructor(private http: HttpClient ) {

  }

  public get usuario() : User {
    return { ...this._usuario };
  }

  public login( email: string, password: string): Observable<AuthResponse> {

    const url = this._baseUrl + '/auth';
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
          if ( resp ) {
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
              email: email
            }
            localStorage.setItem('token', resp.token! );
          }
        }),
        map( resp => resp ),
        catchError( err => of(err.error) )
    );
  }

  public register( name: string, email: string, password: string): Observable<AuthResponse> {

    const url = this._baseUrl + '/auth/new';
    const body = { name, email, password };

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap( ({ ok, token }) => {
        if ( ok ) {
          localStorage.setItem('token', token! );
        }
      }),
      map( resp => resp ),
      catchError( err => of(err.error) )
    );
  }

  validarToken(): Observable<boolean> {

    const url = `${ this._baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-api-key', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', resp.token! );
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
              email: resp.email!
            }

            return resp.ok;
          }),
          catchError( err => of(false) )
        );

  }


  logout() {
    localStorage.clear();
  }

}
