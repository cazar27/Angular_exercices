import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') miForm!: NgForm| undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public validName(): boolean {
    if( this.miForm ) {
      return this.miForm.controls['name'].invalid
        && this.miForm.controls['name'].touched;
    }
    return false;
  }

  public validPrice(): boolean {
    if( this.miForm ) {
      return this.miForm.controls['price'].touched
      && this.miForm.controls['price'].value <= 0;
    }
    return false;
  }

  public save() {
    if( this.miForm ) {
      console.log( this.miForm.value );
    }
    if( this.miForm?.controls['price'].value <= 0 ) {
      console.log('Precio no valido');
      return;
    }
  }

}
