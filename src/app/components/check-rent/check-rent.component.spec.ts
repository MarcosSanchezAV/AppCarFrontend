import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRentComponent } from './check-rent.component';

describe('CheckRentComponent', () => {
  let component: CheckRentComponent;
  let fixture: ComponentFixture<CheckRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
