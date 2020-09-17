import { TestBed } from '@angular/core/testing';

import { FeedbackDetailResolverService } from './feedback-detail-resolver.service';

describe('FeedbackDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackDetailResolverService = TestBed.get(FeedbackDetailResolverService);
    expect(service).toBeTruthy();
  });
});
