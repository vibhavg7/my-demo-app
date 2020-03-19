import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWiseBannerDataComponent } from './area-wise-banner-data.component';

describe('AreaWiseBannerDataComponent', () => {
  let component: AreaWiseBannerDataComponent;
  let fixture: ComponentFixture<AreaWiseBannerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWiseBannerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWiseBannerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
