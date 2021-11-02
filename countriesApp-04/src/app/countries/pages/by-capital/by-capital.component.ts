import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/county.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent implements OnInit {

  private title: string = "Por Capital";
  public placeholder: string = "Buscar por capital";
  public isError: boolean = false;
  public messageError: string = "";
  public data: Country[] = [];
  public term: string = "Madrid";

  constructor( private CountrySrv: CountryService ) { }

  ngOnInit(): void {
  }

  //este parametro esta establecido por event emiter viene del componente
  public search( term: string ) : void {

    this.isError = false;
    this.messageError = "";
    this.term = term;

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
  }

  public get titleSection(): string {
    return this.title;
  }

}
