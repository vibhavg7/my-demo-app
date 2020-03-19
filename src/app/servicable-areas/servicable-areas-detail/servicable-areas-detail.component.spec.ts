import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicableAreasDetailComponent } from './servicable-areas-detail.component';

describe('ServicableAreasDetailComponent', () => {
  let component: ServicableAreasDetailComponent;
  let fixture: ComponentFixture<ServicableAreasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicableAreasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicableAreasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
