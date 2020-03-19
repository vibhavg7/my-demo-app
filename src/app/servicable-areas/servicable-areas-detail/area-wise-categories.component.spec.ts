import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWiseCategoriesComponent } from './area-wise-categories.component';

describe('AreaWiseCategoriesComponent', () => {
  let component: AreaWiseCategoriesComponent;
  let fixture: ComponentFixture<AreaWiseCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWiseCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWiseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
