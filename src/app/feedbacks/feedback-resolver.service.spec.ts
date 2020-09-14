import { TestBed } from '@angular/core/testing';

import { FeedbackResolverService } from './feedback-resolver.service';

describe('FeedbackResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackResolverService = TestBed.get(FeedbackResolverService);
    expect(service).toBeTruthy();
  });
});
