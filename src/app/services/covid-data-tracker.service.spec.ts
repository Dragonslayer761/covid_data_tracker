import { TestBed } from '@angular/core/testing';

import { CovidDataTrackerService } from './covid-data-tracker.service';

describe('CovidDataTrackerService', () => {
  let service: CovidDataTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidDataTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
