import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Country } from '../../interfaces/county.interfaces';

@Component({
  selector: 'app-countries-suggestion',
  templateUrl: './countries-suggestion.component.html',
  styleUrls: ['./countries-suggestion.component.scss']
})
export class CountriesSuggestionComponent implements OnInit {

  @Input() dataSuggestion: Country[] = [];
  @Input() term: string = "";
  @Output() onSearch: EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  public search(): void {
    this.onSearch.emit(this.term);
  }

}
