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

  public regions : string [] = ["africa", "americas", "asia", "europe", "oceania"];
  public placeholder: string = "Buscar por región";
  public regionActive: string = "";
  public isError: boolean = false;
  public messageError: string = "";
  public data: Country[] = [];

  constructor( private CountrySrv: CountryService ) { }

  ngOnInit(): void {
  }

  //este parametro esta establecido por event emiter viene del componente
  public search( term: string ): void {
    if(term !== this.regionActive ) {
      this.isError = false;
      this.messageError = "";
      this.regionActive = term;

      this.CountrySrv.searchRegion(this.regionActive)
      .subscribe( (resp) => {

        if(resp.length) {
          this.data = resp;
        }else {
          this.data = [];
          this.isError = true;
          this.messageError =  "No se encontro nada con el term: " + this.regionActive;
        }

      }, (err) => {
        this.messageError = err.error.message;
        this.isError = true;
      });
    }
  }

  public suggestions( term: string ): void {
    this.isError = false;
    this.regionActive = term;
  }

  public get titleSection(): string {
    return this.title;
  }

  public class( region: string ): string {
    return (region === this.regionActive)?'btn-primary':'btn-outline-primary';
  }

}
