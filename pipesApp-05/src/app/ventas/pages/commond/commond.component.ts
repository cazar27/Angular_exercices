import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commond',
  templateUrl: './commond.component.html',
  styleUrls: ['./commond.component.scss']
})
export class CommondComponent implements OnInit {

  public valorLower: string = "";
  public valorUpper: string = "";
  public valorTitle: string = "";
  public today: Date = new Date();

  constructor() {
    this.valorLower = "Lowercase";
    this.valorUpper = "Uppercase";
    this.valorTitle = "Titlecase";
  }

  ngOnInit(): void {
  }

}
