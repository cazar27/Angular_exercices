import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes: string [] = ["Spiderman","Thor", "Hulk","Ironman"]
  heroeBorrado: string = "";

  constructor() { }

  borrarHeroe():void {
    this.heroeBorrado = this.heroes.pop() || "";
  }

  ngOnInit(): void {
  }

}
