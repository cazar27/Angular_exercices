import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from 'src/app/interfaces/hero.interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  public heroes: Hero[] = [];
  constructor( private dataServ: DataService ) { }

  ngOnInit(): void {

  }

  public addAll(heroe: Hero): void {
    this.dataServ.addItem(heroe);
  }

}
