import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ByRegionComponent } from './by-region.component';
import { CountryService } from '../../services/country.service';

describe('ByRegionComponent', () => {
  let component: ByRegionComponent;
  let fixture: ComponentFixture<ByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByRegionComponent ],
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
