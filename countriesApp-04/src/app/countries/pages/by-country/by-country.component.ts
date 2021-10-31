import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {

  private title: string = "Por País";
  public termino: string = "Hola mundo";

  constructor( private CountrySrv: CountryService ) { }

  ngOnInit(): void {
  }

  public buscar() {
    console.log(this.termino);

    this.CountrySrv.searchCountry(this.termino)
    .subscribe( resp => {
      console.table(resp);
    });
  }

  public get titleSection() : string {
    return this.title;
  }

}
