import { Component } from '@angular/core';
import { Country } from '../../interfaces/county.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent {

  private title: string = "Por Capital";
  public placeholder: string = "Buscar por capital";
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

    this.CountrySrv.searchCapital(this.term)
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

    this.CountrySrv.searchCapital( term )
      .subscribe(
        countries => this.dataSuggestion = countries.splice(0,5),
        (err) => this.dataSuggestion = []
      );
  }

  public get titleSection(): string {
    return this.title;
  }

}
