import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
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
    return this.collection.valueChanges(id);
  }

  public setItem(id: string, value: Hero): void {
    this.collection.doc(id).set(value);
  }

  public addItem(item: Hero): void {
    this.collection.add(item);
  }

  public deleteItem(id: string): void {
    this.collection.doc(id).delete;
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
