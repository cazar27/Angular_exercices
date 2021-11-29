import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public items: MenuItem[] = [];

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
        {
          label: 'Textos y fechas',
          icon: 'pi pi-align-left',
          routerLink: '/',
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: '/numbers',
        },
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
          routerLink: '/no-commond',
        }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: '/sorted',
      }
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //     { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      //   ]
      // }
    ];
  }
}
