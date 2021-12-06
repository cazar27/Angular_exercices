import { Component } from '@angular/core';

@Component ({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})

export class ContadorComponent {
  public title: string = 'Contador App';
  public num  : number = 10;
  public base : number = 5;

  sum() {
    this.num += 1;
  }

  rest() {
    this.num -= 1;
  }

  acumular( valor: number ) {
    this.num += valor;
  }
}
