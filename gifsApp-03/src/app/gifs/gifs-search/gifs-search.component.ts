import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.sass']
})
export class GifsSearchComponent implements OnInit {

  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsServide: GifsService) { }

  ngOnInit(): void {
  }

  buscar() {
    const valor = this.textBuscar.nativeElement.value;
    if(valor.trim().length === 0) {
      return;
    }
    this.gifsServide.searchGifs( valor );
    this.textBuscar.nativeElement.value = "";
  }

}
