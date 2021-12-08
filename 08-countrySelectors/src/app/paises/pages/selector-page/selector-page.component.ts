import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from 'rxjs/operators';

import { PaisesService } from '../../services/paises.service'
import { Country } from '../../interfaces/county.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    region  : ['', Validators.required ],
    country   : ['', Validators.required ],
    frontera: ['', Validators.required ],
  })

  // Llenar selectores
  regions : string[]    = [];
  countries  : Country[] = [];
  // fronteras: string[]    = []
  fronteras: Country[] = []

  // UI
  loading: boolean = false;


  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {

    this.regions = this.paisesService.regions;


    // Cuando cambie la region
    this.miForm.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.miForm.get('country')?.reset('');
          this.loading = true;
        }),
        switchMap( region => this.paisesService.getCountriesByRegion( region ) )
      )
      .subscribe( countries=> {
        this.countries= countries;
        this.loading = false;
    });

    // Cuando cambia el país
    this.miForm.get('country')?.valueChanges
      .pipe(
        tap( () => {
          this.miForm.get('frontera')?.reset('');
          this.loading = true;
        }),
        switchMap( code => this.paisesService.getCountry( code ) ),
        switchMap( country => this.paisesService.getCountries  ( country?.borders! ) )

      )
      .subscribe( countries=> {
        // this.fronteras = pais?.borders || [];
        this.fronteras = countries;
        this.loading = false;
        console.log(countries);
      })

  }


  guardar() {
    console.log(this.miForm.value);
  }

}
