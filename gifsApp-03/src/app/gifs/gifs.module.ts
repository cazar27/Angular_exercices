import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { GifsSearchComponent } from './gifs-search/gifs-search.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    GifsSearchComponent,
    GifsListComponent],
  imports: [
    CommonModule
  ],
  exports: [MainPageComponent]
})
export class GifsModule { }
