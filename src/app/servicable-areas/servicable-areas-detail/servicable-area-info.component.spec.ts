import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicableAreaInfoComponent } from './servicable-area-info.component';

describe('ServicableAreaInfoComponent', () => {
  let component: ServicableAreaInfoComponent;
  let fixture: ComponentFixture<ServicableAreaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicableAreaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicableAreaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
