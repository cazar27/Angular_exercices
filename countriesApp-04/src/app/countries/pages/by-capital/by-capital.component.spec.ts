import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CountryService } from '../../services/country.service';
import { ByCapitalComponent } from './by-capital.component';

describe('ByCapitalComponent', () => {
  let component: ByCapitalComponent;
  let fixture: ComponentFixture<ByCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCapitalComponent ],
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCapitalComponent);
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
