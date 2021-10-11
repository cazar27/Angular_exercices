import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private urlApiConnect: string = "https://api.giphy.com/v1/gifs/search";
  private apiKey: string = "vgg0YPpRTEEN3wS5ETKFI6zDNvSsZveA";
  private _historial: string [] = [];

  // change any to prototipe
  public responce : Gif[] = [];

  constructor( private http: HttpClient ) { }

  get histrorial() {
    this._historial = this._historial.splice(0,9);
    return [...this._historial];
  }

  buscarGifs ( query: string ) {

    query.trim().toLocaleLowerCase;

    if( !this._historial.includes(query) ) {

      this._historial.unshift( query );
      console.log(this._historial);
    }
    else {
      console.log("el valor fue insertado");
    }

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=vgg0YPpRTEEN3wS5ETKFI6zDNvSsZveA&q=dragon ball z&limit=10')
    //   .then(resp => {
    //     resp.json().then( data => {
    //       console.log(data);
    //   })
    // })

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=vgg0YPpRTEEN3wS5ETKFI6zDNvSsZveA&q=dragon ball z&limit=10');
    // const data = await resp.json();
    // console.log(data);

    this.http.get<SearchGifsResponse>(`${ this.urlApiConnect }?api_key=${ this.apiKey }&q=${ query }&limit=10`)
      .subscribe( ( resp ) => {
        console.log(resp.data);
        this.responce = resp.data;
      } )
  }
}
