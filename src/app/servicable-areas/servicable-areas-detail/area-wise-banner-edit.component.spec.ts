import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWiseBannerEditComponent } from './area-wise-banner-edit.component';

describe('AreaWiseBannerEditComponent', () => {
  let component: AreaWiseBannerEditComponent;
  let fixture: ComponentFixture<AreaWiseBannerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWiseBannerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWiseBannerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
