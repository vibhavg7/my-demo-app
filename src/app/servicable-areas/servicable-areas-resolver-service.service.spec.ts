import { TestBed } from '@angular/core/testing';

import { ServicableAreasResolverService } from './servicable-areas-resolver-service';

describe('ServicableAreasResolverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicableAreasResolverService = TestBed.get(ServicableAreasResolverService);
    expect(service).toBeTruthy();
  });
});
