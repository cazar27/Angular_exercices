import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCommondComponent } from './no-commond.component';

describe('NoCommondComponent', () => {
  let component: NoCommondComponent;
  let fixture: ComponentFixture<NoCommondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCommondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCommondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
