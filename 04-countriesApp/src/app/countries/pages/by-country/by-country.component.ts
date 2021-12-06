import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/county.interfaces';
@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {

  //TODO: Añadir la parte de informacion de covid
  //- nuevo servicio a la nueva api
  //- nuevo componente de grafica

  private title: string = "Por País";
  public placeholder: string = "Buscar por país";
  public isError: boolean = false;
  public messageError: string = "";
  public data: Country[] = [];
  public dataSuggestion: Country[] = [];
  public term: string = "";
  public showSuggestion: boolean = false;

  constructor( private CountrySrv: CountryService ) { }

  public search( term: string ) : void {

    this.isError = false;
    this.messageError = "";
    this.term = term;
    this.dataSuggestion = [];
    this.showSuggestion = false;

    this.CountrySrv.searchCountries(this.term)
    .subscribe( (resp) => {

      if(resp.length) {
        this.data = resp;
      }else {
        this.data = [];
        this.isError = true;
        this.messageError =  "No se encontro nada con el term: " + this.term;
      }

    }, (err) => {
      this.messageError = err.error.message;
      this.isError = true;
    });
  }

  public suggestions( term: string ): void {
    this.isError = false;
    this.term = term;
    this.showSuggestion = true;

    this.CountrySrv.searchCountries( term )
      .subscribe(
        countries => this.dataSuggestion = countries.splice(0,5),
        (err) => this.dataSuggestion = []
      );
  }

  public get titleSection(): string {
    return this.title;
  }

}
