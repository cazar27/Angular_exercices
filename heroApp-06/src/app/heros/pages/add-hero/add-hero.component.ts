import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Hero, Publisher } from 'src/app/interfaces/hero.interfaces';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  public id = '';
  public heroe: Hero | undefined = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    img: '',
    img_face: ''
  };

  public publisherList: Publisher[] = [Publisher.DCComics, Publisher.MarvelComics];

  constructor(
    private dataServ: DataService,
    private router : Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.activeRoute.params) {
      this.activeRoute.params.subscribe(
        ({id}) => {
          this.id = id;
          this.dataServ.getItem(id).subscribe(
            heroe => {
              this.heroe = heroe
                .find( heroe => heroe.id == id);
            }
          );
        }
      )
    }
  }

  public save(): void {
    if(this.heroe) {
      this.add(this.heroe);
      console.log(this.heroe)
    }
  }

  public back() {
    this.router.navigate(['/heroes/list']);
  }

  public add(heroe: Hero): void {
    if(this.id && this.heroe) {
      this.dataServ.setItem(this.id, this.heroe);
    } else {
      this.id = heroe.publisher.slice(0,2) + '-' + heroe.superhero;
      heroe.id = this.id.toLowerCase();
      this.dataServ.addItem(heroe.id, heroe);
    }
  }

}
