import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from 'src/app/interfaces/hero.interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.scss']
})
export class DetailHeroComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute ,
    private dataServ: DataService,
  ) { }

  public heroes!: Hero[];
  public heroe: Hero | undefined;

  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      ({id}) => {
        this.dataServ.getItem(id).subscribe(
          heroes => {
            this.heroe = heroes
              .find( heroe => heroe.id == id);
          }
        );
      }
    )
  }

  // public back(): void {
  //   this.location.back();
  // }

  public back() {
    this.router.navigate(['/heroes/list']);
  }

}
