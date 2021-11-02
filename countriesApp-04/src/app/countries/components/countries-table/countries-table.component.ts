import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/county.interfaces';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {

  @Input() data: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
