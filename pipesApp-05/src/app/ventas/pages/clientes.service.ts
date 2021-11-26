import { Injectable } from '@angular/core';
import { Cliente } from './cliente.interface';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private _clientes: Cliente[] = [
    {
      nombre: 'Susana',
      genero: 'femenino'
    }
  ]

  constructor() {
    this._clientes.push({nombre: "Pepe", genero: 'masculino'});
    this._clientes.push({nombre: "Andres", genero: 'masculino'});
    this._clientes.push({nombre: "Manuela", genero: 'femenino'});
  }

  public get returnclientes(): Cliente [] {
    return [...this._clientes];
  }

  public addCliente( data: Cliente): void {
    this._clientes.push( data );
  }

  public removeCliente( ): void {
    this._clientes.pop();
  }
}
