import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent implements OnInit {

  private title: string = "Por Región";

  constructor() { }

  ngOnInit(): void {
  }

  public get titleSection() : string {
    return this.title;
  }

}
