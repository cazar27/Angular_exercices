import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/county.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {

  private title: string = "Por País";
  public isError: boolean = false;
  public messageError: string = "";
  public data: Country[] = [];
  public term: string = "España";

  constructor( private CountrySrv: CountryService ) { }

  ngOnInit(): void {
  }

  //este parametro esta establecido por event emiter viene del componente
  public search( term: string ) : void {

    this.isError = false;
    this.messageError = "";
    this.term = term;

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
  }

  public get titleSection(): string {
    return this.title;
  }

}
