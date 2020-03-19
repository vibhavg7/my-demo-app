import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWisePaymentOptionsComponent } from './area-wise-payment-options.component';

describe('AreaWisePaymentOptionsComponent', () => {
  let component: AreaWisePaymentOptionsComponent;
  let fixture: ComponentFixture<AreaWisePaymentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWisePaymentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWisePaymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
