import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchersComponent } from './switchers.component';

describe('SwitchersComponent', () => {
  let component: SwitchersComponent;
  let fixture: ComponentFixture<SwitchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
