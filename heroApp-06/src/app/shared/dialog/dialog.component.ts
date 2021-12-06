import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { Hero } from 'src/app/interfaces/hero.interfaces';

export interface DialogData {
  heroe: Hero;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  public ngOnInit(): void {
    console.table(this.data);
  }

  public confirm(): void {
    this.dialogRef.close(true);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
