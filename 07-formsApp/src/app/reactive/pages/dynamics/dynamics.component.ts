import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  public miForm: FormGroup = this.fb.group( {
    name: [ 'Carlos', [ Validators.required, Validators.minLength(3) ] ],
    favs: this.fb.array([
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding',Validators.required  ],
    ], Validators.required )
  });

  public newFav: FormControl = this.fb.control('', Validators.required );

  public get favorites() : any {
    return this.miForm.get('favs') as FormArray;
  }

  constructor (private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  public save():void {
    if ( this.miForm.invalid ) {
      this.miForm.markAllAsTouched();
      return;
    }

    // imprimir el valor del formulario, sólo si es válido
    console.log(this.miForm.value);
  }

  public validField( field: string ): boolean | null {
    return this.miForm.controls[field].errors
     && this.miForm.controls[field].touched;
  }

  public add():void {
    if ( this.newFav.invalid ) { return; }

    // this.favoritosArr.push( new FormControl( this.newFav.value, Validators.required ) );
    this.favorites.push( this.fb.control(this.newFav.value, Validators.required ) );
    this.newFav.reset();
  }

  public delete(index: number):void {
    this.favorites.removeAt(index);
  }

}
