import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonDocumentsComponent } from './delivery-person-documents.component';

describe('DeliveryPersonDocumentsComponent', () => {
  let component: DeliveryPersonDocumentsComponent;
  let fixture: ComponentFixture<DeliveryPersonDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPersonDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPersonDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
