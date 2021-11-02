import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CountryService } from '../../services/country.service';

import { ByCountryComponent } from './by-country.component';

describe('ByCountryComponent', () => {
  let component: ByCountryComponent;
  let fixture: ComponentFixture<ByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCountryComponent ],
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service.searchRegion).toBeTruthy();
   });
});
