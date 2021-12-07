import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') miForm!: NgForm;

  initialForm = {
    name: '',
    price: 1,
    stock: 5
  }

  constructor() { }

  ngOnInit(): void {
  }

  public validName(): boolean {
    if( this.miForm?.controls ) {
      return this.miForm.controls['name'].invalid
        && this.miForm.controls['name'].touched;
    }
    return false;
  }

  public validPrice(): boolean {
    if( this.miForm?.controls ) {
      return this.miForm.controls['price'].touched
      && this.miForm.controls['price'].value <= 0;
    }
    return false;
  }

  public save() {
    console.log('posteo correcto');
    console.log(this.miForm?.value);
    this.miForm?.resetForm(
      {
        name: '',
        price: 0,
        stock: 0
      }
    );
  }

}
