import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Hero } from 'src/app/interfaces/hero.interfaces';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss']
})
export class ListHeroComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private location: Location,
    private dataServ: DataService,
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.dataServ.getItems.subscribe(heroes => { this.heroes = heroes; });
  }

}
