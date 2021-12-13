import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import Swal from 'sweetalert2';
import { LoginError } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginErr: LoginError = {
    email: {
      text: '',
      error: false
    },
    password: {
      text: '',
      error: false
    },
    message: {
      text: '',
      error: false
    }
  };
  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', [Validators.required, Validators.pattern(this.validatorService.passwordPattern)]],
  });

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    this.loginErr = {
      email: {
        text: '',
        error: false
      },
      password: {
        text: '',
        error: false
      },
      message: {
        text: '',
        error: false
      }
    };
    const { email, password } = this.myForm.value;

    this.authService.login( email, password)
    .subscribe( resp => {
      console.log(resp);
      console.log(resp.ok);
      if ( resp.ok === true ) {
        console.log("login");
        this.router.navigateByUrl('/dashboard');
      } else {
        let messegeError = '';
        if(resp !== undefined) {

          if(resp.errors !== undefined) {

            if(resp.errors.email != undefined) {
              messegeError += '<p>' + resp.errors.email.msg + '</p>';
              this.loginErr.email.error = true;
              this.loginErr.email.text = '' + resp.errors.email.msg;
            }
            if(resp.errors.password) {
              messegeError += '<p>' + resp.errors.password.msg + '</p>';
              this.loginErr.password.error = true;
              this.loginErr.password.text = '' + resp.errors.password.msg;
            }

          } else {

            if(resp.msg) {
              messegeError += '<p>' + resp.msg + '</p>';
              this.loginErr.message.error = true;
              this.loginErr.message.text = resp.msg;
            }
          }
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html:  messegeError,
            footer: '<a routerLink="/auth/register" class="txt2">Crear una cuenta aquí</a>'
          })
        }
      }
    });

  }

  ngOnInit(): void {

  }

}
