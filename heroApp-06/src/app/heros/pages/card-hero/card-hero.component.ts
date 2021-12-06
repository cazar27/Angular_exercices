import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interfaces';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent implements OnInit {

  @Input() heroe!: Hero;

  constructor( private dataService: DataService) { }

  public  ngOnInit(): void {
  }

  public delete(id: string) {
    console.log(this.dataService.deleteItem(id));
  }

}
