import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  public usuario: Usuario | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.authService.getItems.subscribe(
      usuario => {
        this.usuario = usuario
          .find( usuario => usuario.id == this.authService.getId());
      }
    );
  }

  public logout():void {
    this.usuario = undefined;
    this.authService.removeUserLogin();
    this.authService.setIdAuth('0');
    this.router.navigate( ['/heroes/list']);
  }

}
