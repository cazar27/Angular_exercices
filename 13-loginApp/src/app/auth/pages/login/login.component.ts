import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', [Validators.required, Validators.pattern(this.validatorService.passwordPattern)]],
  });

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    console.table(this.myForm.value);
    console.table(this.myForm.valid);
    const { email, password } = this.myForm.value;

    this.authService.login( email, password)
    .subscribe(resp => console.log );

    //this.router.navigateByUrl('dashboard');
  }

  ngOnInit(): void {
  }

}
