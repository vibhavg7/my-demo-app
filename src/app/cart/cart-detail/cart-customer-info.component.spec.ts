import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCustomerInfoComponent } from './cart-customer-info.component';

describe('CartCustomerInfoComponent', () => {
  let component: CartCustomerInfoComponent;
  let fixture: ComponentFixture<CartCustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCustomerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
