import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interfaces';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent implements OnInit {

  @Input() heroe!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
