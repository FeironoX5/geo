import { TestBed } from '@angular/core/testing';

import { ExService } from './ex.service';

describe('ExService', () => {
  let service: ExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
