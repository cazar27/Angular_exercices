import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {

  @Output() onSubmit: EventEmitter<string> = new EventEmitter;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter;

  public debouncer: Subject<string> = new Subject();
  public term: string = "España";

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(600))
    .subscribe( value => {
      this.onDebounce.emit( this.term );
    })
  }

  keyPress( evt : any ): void {
    this.debouncer.next( this.term )
  }

  public search(): void {
    this.onSubmit.emit(this.term);
  }

}
