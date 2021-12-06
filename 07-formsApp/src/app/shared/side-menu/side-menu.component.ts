import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string,
  path: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public menuTemplateItems: MenuItem[] = [
    {
      text: 'basicos',
      path: '/template/basics'
    },
    {
      text: 'dinamicos',
      path: '/template/dynamics'
    },
    {
      text: 'switchers',
      path: '/template/switchers'
    },
  ];

  public menuReactiveItems: MenuItem[] = [
    {
      text: 'basicos',
      path: '/reactive/basics'
    },
    {
      text: 'dinamicos',
      path: '/reactive/dynamics'
    },
    {
      text: 'switchers',
      path: '/reactive/switchers'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
