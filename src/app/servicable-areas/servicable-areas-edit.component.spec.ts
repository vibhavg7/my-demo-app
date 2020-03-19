import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicableAreasEditComponent } from './servicable-areas-edit.component';

describe('ServicableAreasEditComponent', () => {
  let component: ServicableAreasEditComponent;
  let fixture: ComponentFixture<ServicableAreasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicableAreasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicableAreasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
