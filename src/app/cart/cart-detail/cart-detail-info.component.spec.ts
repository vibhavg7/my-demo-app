import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailInfoComponent } from './cart-detail-info.component';

describe('CartDetailInfoComponent', () => {
  let component: CartDetailInfoComponent;
  let fixture: ComponentFixture<CartDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
