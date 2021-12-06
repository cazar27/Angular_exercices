import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  ammount: number = 256681188.5697;
  percent: number = 0.0856;

  constructor() { }

  ngOnInit(): void {
  }

}
