import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  public miForm: FormGroup = this.fb.group( {
    name   : [null, [ Validators.required, Validators.minLength(3) ]],
    price  : [null,[ Validators.required, Validators.min(0) ]],
    stock  : [null, [ Validators.required, Validators.min(0) ]]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miForm.setValue({
      name : '',
      price  : 1000,
      stock  : 5
    })
  }


  public validField( field: string ): boolean | null {
    return this.miForm.controls[field].errors && this.miForm.controls[field].touched;
  }

  public save() {
    if(this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      return;
    }

    this.miForm.reset();
  }

}
