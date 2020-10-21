import { TestBed } from '@angular/core/testing';

import { RegulationsService } from './regulations.service';

describe('RegulationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegulationsService = TestBed.get(RegulationsService);
    expect(service).toBeTruthy();
  });
});
