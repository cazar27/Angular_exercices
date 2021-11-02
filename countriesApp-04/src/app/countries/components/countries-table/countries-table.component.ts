import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/county.interfaces';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {

  //TODO: crear el virtual scroll para este componente y que no se haga infinito de primeras
  //TODO: intentar guardar las busquedas en local para no recargar constantemente
  @Input() data: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
