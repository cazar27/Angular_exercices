import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommondComponent } from './commond.component';

describe('CommondComponent', () => {
  let component: CommondComponent;
  let fixture: ComponentFixture<CommondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
