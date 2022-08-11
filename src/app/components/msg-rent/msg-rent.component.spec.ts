import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgRentComponent } from './msg-rent.component';

describe('MsgRentComponent', () => {
  let component: MsgRentComponent;
  let fixture: ComponentFixture<MsgRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
