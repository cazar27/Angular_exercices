import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesSuggestionComponent } from './countries-suggestion.component';

describe('CountriesSuggestionComponent', () => {
  let component: CountriesSuggestionComponent;
  let fixture: ComponentFixture<CountriesSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
