import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWiseCategoryDataComponent } from './area-wise-category-data.component';

describe('AreaWiseCategoryDataComponent', () => {
  let component: AreaWiseCategoryDataComponent;
  let fixture: ComponentFixture<AreaWiseCategoryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWiseCategoryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWiseCategoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
