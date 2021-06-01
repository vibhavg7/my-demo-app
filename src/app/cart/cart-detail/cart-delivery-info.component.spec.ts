import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDeliveryInfoComponent } from './cart-delivery-info.component';

describe('CartDeliveryInfoComponent', () => {
  let component: CartDeliveryInfoComponent;
  let fixture: ComponentFixture<CartDeliveryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDeliveryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDeliveryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
