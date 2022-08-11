import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRentComponent } from './info-rent.component';

describe('InfoRentComponent', () => {
  let component: InfoRentComponent;
  let fixture: ComponentFixture<InfoRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
