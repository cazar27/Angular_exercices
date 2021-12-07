import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  @ViewChild('myForm') miForm!: NgForm| undefined;

  initialForm = {
    name: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  public save() {

  }

  public validName():boolean {
    if( this.miForm?.controls ) {
      return this.miForm.controls['name'].invalid
        && this.miForm.controls['name'].touched;
    }
    return false;
  }

}
