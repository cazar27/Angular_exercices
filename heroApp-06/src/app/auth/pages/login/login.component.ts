import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Usuario } from '../../../interfaces/usuarios.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario | undefined;

  constructor( private router: Router,
    private authService: AuthService ) { }

  ngOnInit(): void {
  }

  get auth() {
    return {...this.usuario};
  }

  public login() {

    this.authService.setIdAuth('1');

    if(this.usuario?.name != '' ) {
      this.router.navigate( ['/heroes/list']);
    } else {
      console.log('El login fue fallido');
    }
  }

}
