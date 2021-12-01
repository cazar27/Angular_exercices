import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/interfaces/hero.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private collection!: AngularFirestoreCollection<Hero>;
  private items!: Observable<Hero[]>;
  private item!: Hero;

  constructor( private readonly firestore: AngularFirestore ) {
    this.collection = firestore.collection<Hero>('heroes');
  }

  public get getItems() : Observable<Hero[]> {
    return this.collection.valueChanges();
  }

  public setItem(id:string, value : Hero) {
    this.collection.doc(id).set(value);
  }

}
