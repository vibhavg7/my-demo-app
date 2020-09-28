import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddFeedbackComponent } from './customer-add-feedback.component';

describe('CustomerAddFeedbackComponent', () => {
  let component: CustomerAddFeedbackComponent;
  let fixture: ComponentFixture<CustomerAddFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
