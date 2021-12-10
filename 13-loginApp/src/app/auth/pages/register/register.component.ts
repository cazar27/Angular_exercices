import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.fieldEquals('password', 'password2')]
  });

  get emailErrorMsg(): string {

    const errors = this.myForm.get('email')?.errors;
    if ( errors?.['required'] ) {
      return 'Email es obligatorio';
    } else if ( errors?.['pattern'] ) {
      return 'No es un email valido';
    } else if ( errors?.['emailTomado'] ) {
      return 'El email ya esta en uso';
    }

    return '';
  }

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {

    this.myForm.reset({
      name: 'Fernando Herrera',
      email: 'test1@test.com',
      username: 'fernando_her85',
      password: '1234@Fhe',
      password2: '1234@Fhe'
    })
  }

  campoNoValido(campo: string) {
    return this.myForm.get(campo)?.invalid
      && this.myForm.get(campo)?.touched;
  }

  submitFormulario() {

    const {name, email, password} = this.myForm.value;
    console.log(this.myForm.value);
    this.authService.register( name, email, password )
    .subscribe(resp => console.log );

    this.myForm.markAllAsTouched();
    //this.router.navigateByUrl('dashboard');

  }

}
