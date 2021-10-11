import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private urlApiConnect: string = "https://api.giphy.com/v1/gifs/search";
  private apiKey: string = "vgg0YPpRTEEN3wS5ETKFI6zDNvSsZveA";
  private _history: string [] = [];

  // change any to prototipe
  public responce : Gif[] = [];

  constructor( private http: HttpClient ) {
    if( localStorage.getItem('history') ) {
      this._history = JSON.parse( localStorage.getItem('history')! );
    }
    if( localStorage.getItem('result') ) {
      this.responce = JSON.parse( localStorage.getItem('result')! );
    }
  }

  get histrorial() {
    return [...this._history];
  }

  removeGif( position: number ) {
    this._history.splice( position, 1 );
    localStorage.setItem( 'history' , JSON.stringify( this._history ) );
  }

  searchGifs ( query: string ) {

    query.trim().toLocaleLowerCase;

    if( !this._history.includes(query) ) {

      this._history.unshift( query );
      this._history = this._history.splice(0,9);

      localStorage.setItem( 'history' , JSON.stringify( this._history ) );
    }
    else {
      // console.log("el valor ya fue insertado");
    }

    const params = new HttpParams()
      .set( 'api_key', this.apiKey )
      .set( 'limit', '10' )
      .set( 'q', query );

    this.http.get<SearchGifsResponse>(`${ this.urlApiConnect }`, {params: params} )
      .subscribe( ( resp ) => {
        this.responce = resp.data;
        localStorage.setItem('result', JSON.stringify(  this.responce ));
    });
  }
}
