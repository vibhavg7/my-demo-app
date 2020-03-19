import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicableAreasDashboardComponent } from './servicable-areas-dashboard.component';

describe('ServicableAreasDashboardComponent', () => {
  let component: ServicableAreasDashboardComponent;
  let fixture: ComponentFixture<ServicableAreasDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicableAreasDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicableAreasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
