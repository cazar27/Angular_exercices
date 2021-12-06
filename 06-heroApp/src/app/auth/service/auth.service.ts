import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private collection!: AngularFirestoreCollection<Usuario>;
  private idUser: string = '0';
  public user: Usuario | undefined;

  constructor(private readonly firestore: AngularFirestore ) {
    this.collection = firestore.collection<Usuario>('usuarios');
  }

  public get getItems(): Observable<Usuario[]> {
    return this.collection.valueChanges();
  }

  public setIdAuth(id : string) {
    this.idUser = id;
  }

  public getId(): string {
    return this.idUser;
  }

  public getUser(): Usuario | undefined {
    return this.user;
  }

  public removeUserLogin(): void {
    this.user = undefined;
  }

  public setItem(id: string, value: Usuario): void {
    this.collection.doc(id).update(value);
  }

  public addItem(id:string, item: Usuario): void {
    this.collection.doc(id).set(item);
  }

  public deleteItem(id: string): void {
    this.collection.doc(id).delete();
  }


}
