import { TestBed } from '@angular/core/testing';

import { SingleStatsService } from './single-stats.service';

describe('SingleStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleStatsService = TestBed.get(SingleStatsService);
    expect(service).toBeTruthy();
  });
});
