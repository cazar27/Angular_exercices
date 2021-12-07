import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switchers',
  templateUrl: './switchers.component.html',
  styleUrls: ['./switchers.component.scss']
})
export class SwitchersComponent implements OnInit {

  @ViewChild('myForm') miForm!: NgForm;
  public persona = {
    gender: 'F',
    notification: true,
  }
  public termsandcondition: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

}
