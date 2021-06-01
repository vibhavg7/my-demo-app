import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductInfoComponent } from './cart-product-info.component';

describe('CartProductInfoComponent', () => {
  let component: CartProductInfoComponent;
  let fixture: ComponentFixture<CartProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProductInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
