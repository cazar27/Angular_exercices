import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchers',
  templateUrl: './switchers.component.html',
  styleUrls: ['./switchers.component.scss']
})
export class SwitchersComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    notification: [ true, Validators.required ],
    termsandcondition: [ false, Validators.requiredTrue ]
  });


  public persona = {
    gender: 'F',
    notification: false,
  }

  termsandcondition: boolean = false;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miForm.reset({
      ...this.persona,
      termsandcondition: false
    });

    this.miForm.valueChanges.subscribe( ({ termsandcondition, ...rest }) => {
      this.persona = rest;
    })

  }

  public disable():boolean  {
    return this.miForm.valid;
  }

  public save() {

    const formValue = { ...this.miForm.value };
    delete formValue.termsandcondition;

    this.persona = formValue;
  }

}
