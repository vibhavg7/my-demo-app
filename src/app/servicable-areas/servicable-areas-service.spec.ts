import { TestBed } from '@angular/core/testing';

import { ServicableAreasService } from './servicable-areas-service';

describe('ServicableAreasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicableAreasService = TestBed.get(ServicableAreasService);
    expect(service).toBeTruthy();
  });
});
