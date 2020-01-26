import { TestBed } from '@angular/core/testing';

import { DeliveryResolverService } from './delivery-resolver.service';

describe('DeliveryResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryResolverService = TestBed.get(DeliveryResolverService);
    expect(service).toBeTruthy();
  });
});
