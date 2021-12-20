import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.validatorService.passwordPattern)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.fieldEquals('password', 'password2')]
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.myForm.reset({
      name: '',
      email: '',
      password: '',
      password2: ''
    })
  }

  register() {
    // TODO: Validar la contraseña, En el form nunca se si es valida
    // ni siquiera me lo indica el back y no se de que error se trata
    // al registrarme no me valida el token correctamente
    const { name, email, password } = this.myForm.value;

    if( this.myForm.valid ) {
      this.authService.register( name, email, password )
      .subscribe(resp => {
        if( resp ) {
          if(resp.ok === true) {
            this.authService.validarToken();
            this.router.navigateByUrl('dashboard');
          } else {

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              html:  '<p>Rellene de nuevo los campos con error</p><p>'+ resp.msg +'</p>',
              footer: '<a routerLink="/auth/login" class="txt2">Loguearse</a>'
            })
          }
        }
      } );

    } else {
      console.log("Validar campos");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html:  'Rellene de nuevo los campos con error',
        footer: '<a routerLink="/auth/login" class="txt2">Loguearse</a>'
      })
      this.myForm.markAllAsTouched();
    }

  }

}
