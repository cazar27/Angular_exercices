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
  public termino: string = "España";
  public isError: boolean = false;
  public messageError: string = "";
  public data: Country[] | undefined;

  constructor( private CountrySrv: CountryService ) { }

  ngOnInit(): void {
  }

  public buscar() {

    this.isError = false;
    this.messageError = "";

    this.CountrySrv.searchCountry(this.termino)
    .subscribe( (resp) => {

      if(resp.length) {
        this.data = resp;
        console.table(this.data);
      }else {
        this.data = [];
        this.isError = true;
        this.messageError =  "No se encontro nada con el termino: " + this.termino;
      }

    }, (err) => {
      this.messageError = err.error.message;
      this.isError = true;
    });
  }

  public get titleSection() : string {
    return this.title;
  }

}
