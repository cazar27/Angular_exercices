import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Hero } from 'src/app/interfaces/hero.interfaces';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent implements OnInit {

  @Input() heroe!: Hero;

  constructor(
    private dataService: DataService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  public  ngOnInit(): void {
  }

  public delete(id: string) {
    console.log(this.dataService.deleteItem(id));
    this.showSnackbar('el heroe ' + this.heroe?.superhero + ' quedo eliminado')
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( DialogComponent, {
      width: '22rem',
      data: {heroe: this.heroe},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.delete(this.heroe.id);
    });
  }

  public showSnackbar( mensaje: string ) {

    this._snackBar.open(mensaje, 'Aceptar',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })

  }
}
