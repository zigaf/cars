import { TestBed } from '@angular/core/testing';

import { BoilerPartsService } from './boiler-parts.service';

describe('BoilerPartsService', () => {
  let service: BoilerPartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoilerPartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
