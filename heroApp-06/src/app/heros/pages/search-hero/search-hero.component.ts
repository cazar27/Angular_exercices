import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})
export class SearchHeroComponent implements OnInit {

  public termino: string = '';
  public selectedHero!: Hero;
  public heroes! : Observable<Hero[]>;

  constructor( private dataServ: DataService ) { }

  ngOnInit(): void {
    this.heroes = this.dataServ.getItems;
  }

  searching() {
    this.heroes = this.dataServ.searchHero(this.termino);
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {
    this.selectedHero = event.option.value;
    this.termino = this.selectedHero.superhero;
}

}
