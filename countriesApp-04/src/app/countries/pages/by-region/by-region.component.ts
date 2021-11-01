import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/county.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent implements OnInit {

  private title: string = "Por Región";
  public isError: boolean = false;
  public messageError: string = "";
  public data: Country[] = [];
  public termino: string = "España";

  constructor( private CountrySrv: CountryService ) { }

  ngOnInit(): void {
  }

  //este parametro esta establecido por event emiter viene del componente
  public buscar( termino: string ) {

    this.isError = false;
    this.messageError = "";
    this.termino = termino;

    this.CountrySrv.searchRegion(this.termino)
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
