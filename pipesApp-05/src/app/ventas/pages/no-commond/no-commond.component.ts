import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { Cliente } from '../cliente.interface';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-no-commond',
  templateUrl: './no-commond.component.html',
  styleUrls: ['./no-commond.component.scss']
})
export class NoCommondComponent implements OnInit {

  // i18nSelect
  public cliente: Cliente =  {nombre: '', genero: ''};
  public nombre: string = "Susana";
  public genero: string = "femenino";
  public invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural
  public clientes: Cliente [] = [];

  public clientesMap:
  {[k: string]: string} = {
    '=0': ' no tenemos ningun cliente',
    '=1': ' tenemos un cliente',
    '>1': ' tenemos # clientes',
    'other': ' tenemos # clientes',
  };

  constructor(
    private primengConfig: PrimeNGConfig,
    private clienteServ: ClientesService
  ) {
    this.cliente = { nombre: this.nombre , genero: this.genero };
    this.clientes =  this.clienteServ.returnclientes;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  public addCustomer(): void  {
    this.cliente = { nombre: this.nombre , genero: this.genero };
    this.clienteServ.addCliente(this.cliente);
    this.clientes =  this.clienteServ.returnclientes;
  }

  public removeCustomer(): void {
    this.clienteServ.removeCliente();
    this.clientes =  this.clienteServ.returnclientes;
  }

}
