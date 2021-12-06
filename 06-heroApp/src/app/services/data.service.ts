import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, filter } from 'rxjs';
import { Hero } from 'src/app/interfaces/hero.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private collection!: AngularFirestoreCollection<Hero>;

  constructor(private readonly firestore: AngularFirestore) {
    this.collection = firestore.collection<Hero>('heroes');
  }

  public get getItems(): Observable<Hero[]> {
    return this.collection.valueChanges();
  }

  public getItem(id: string): Observable<Hero[]> {
    return this.firestore.collection<Hero>('heroes',ref => ref.where('id','==',id).limit(1)).valueChanges();
  }

  public setItem(id: string, value: Hero): void {
    this.collection.doc(id).update(value);
  }

  public addItem(id:string, item: Hero): void {
    this.collection.doc(id).set(item);
  }


  public deleteItem(id: string): void {
    this.collection.doc(id).delete();
  }

  public searchHero(term: string): Observable<Hero[]> {
    return this.firestore.collection<Hero>('heroes',ref => ref
      .limit(6)
      .orderBy("superhero")
      .startAt(term)
      .endAt(term + "\uf8ff")
    )
    .valueChanges();

  }

}
