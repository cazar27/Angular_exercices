import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorted',
  templateUrl: './sorted.component.html',
  styleUrls: ['./sorted.component.scss']
})
export class SortedComponent implements OnInit {

  constructor() { }

  mayuscula: boolean = false;

  ngOnInit(): void {
  }

  toogleTransform() {
    this.mayuscula = !this.mayuscula;
  }

}
