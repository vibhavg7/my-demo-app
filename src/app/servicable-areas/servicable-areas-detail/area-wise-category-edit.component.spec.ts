import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWiseCategoryEditComponent } from './area-wise-category-edit.component';

describe('AreaWiseCategoryEditComponent', () => {
  let component: AreaWiseCategoryEditComponent;
  let fixture: ComponentFixture<AreaWiseCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWiseCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWiseCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
