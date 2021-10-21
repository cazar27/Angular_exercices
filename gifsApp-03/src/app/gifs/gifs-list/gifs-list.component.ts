import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.sass']
})
export class GifsListComponent implements OnInit {

  get result() {
    return this.gifsService.responce;
  }

  constructor( private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
