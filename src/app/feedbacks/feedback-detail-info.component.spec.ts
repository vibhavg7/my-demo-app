import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetailInfoComponent } from './feedback-detail-info.component';

describe('FeedbackDetailInfoComponent', () => {
  let component: FeedbackDetailInfoComponent;
  let fixture: ComponentFixture<FeedbackDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
