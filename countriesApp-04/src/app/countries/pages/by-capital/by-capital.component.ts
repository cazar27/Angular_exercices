import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent implements OnInit {

  private title: string = "Por Capital";

  constructor() { }

  ngOnInit(): void {
  }

  public get titleSection() : string {
    return this.title;
  }

}
