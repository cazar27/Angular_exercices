import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {

  @Output() onSubmit: EventEmitter<string> = new EventEmitter;
  public termino: string = "España";

  constructor() { }

  ngOnInit(): void {
  }

  public buscar() {
    this.onSubmit.emit(this.termino);
  }

}
