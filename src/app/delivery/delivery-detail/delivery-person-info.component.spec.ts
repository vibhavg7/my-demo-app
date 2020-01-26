import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonInfoComponent } from './delivery-person-info.component';

describe('DeliveryPersonInfoComponent', () => {
  let component: DeliveryPersonInfoComponent;
  let fixture: ComponentFixture<DeliveryPersonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPersonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
