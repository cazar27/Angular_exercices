import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CountryViewComponent } from './country-view.component';
import { CountryService } from '../../services/country.service';

describe('CountryViewComponent', () => {
  let component: CountryViewComponent;
  let fixture: ComponentFixture<CountryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryViewComponent ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [CountryService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service.searchCountry).toBeTruthy();
   });
});
