import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonRealtimeOrdersComponent } from './delivery-person-realtime-orders.component';

describe('DeliveryPersonRealtimeOrdersComponent', () => {
  let component: DeliveryPersonRealtimeOrdersComponent;
  let fixture: ComponentFixture<DeliveryPersonRealtimeOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPersonRealtimeOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPersonRealtimeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
