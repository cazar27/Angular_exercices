import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  get historial ()  {
    return this.gifsService.histrorial;
  }
  constructor( private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  remove( position: number ) {
    this.gifsService.removeGif( position);
  }

  search( value: string ) {
    this.gifsService.searchGifs(value);
  }

}
