import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {

  private title: string = "Por País";

  constructor() { }

  ngOnInit(): void {
  }

  public get titleSection() : string {
    return this.title;
  }

}
