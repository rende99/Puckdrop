import { TestBed } from '@angular/core/testing';

import { TeamNamesService } from './team-names.service';

describe('TeamNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamNamesService = TestBed.get(TeamNamesService);
    expect(service).toBeTruthy();
  });
});
