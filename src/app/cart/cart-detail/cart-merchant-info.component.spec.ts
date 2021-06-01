import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMerchantInfoComponent } from './cart-merchant-info.component';

describe('CartMerchantInfoComponent', () => {
  let component: CartMerchantInfoComponent;
  let fixture: ComponentFixture<CartMerchantInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMerchantInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMerchantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
