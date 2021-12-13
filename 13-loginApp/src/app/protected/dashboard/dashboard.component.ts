import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  get usuario(): User {
    return this.authService.usuario;
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('auth/');
  }

}
