import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWiseBannersComponent } from './area-wise-banners.component';

describe('AreaWiseBannersComponent', () => {
  let component: AreaWiseBannersComponent;
  let fixture: ComponentFixture<AreaWiseBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWiseBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWiseBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
