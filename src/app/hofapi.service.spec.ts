import { TestBed } from '@angular/core/testing';

import { HOFAPIService } from './hofapi.service';

describe('HOFAPIService', () => {
  let service: HOFAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HOFAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
