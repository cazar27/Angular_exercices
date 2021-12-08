import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() name!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }

}
