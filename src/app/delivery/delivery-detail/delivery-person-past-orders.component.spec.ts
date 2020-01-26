import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonPastOrdersComponent } from './delivery-person-past-orders.component';

describe('DeliveryPersonPastOrdersComponent', () => {
  let component: DeliveryPersonPastOrdersComponent;
  let fixture: ComponentFixture<DeliveryPersonPastOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPersonPastOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPersonPastOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
