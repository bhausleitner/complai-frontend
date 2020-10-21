import { TestBed } from '@angular/core/testing';

import { ExplorerFiltersService } from './explorer-filters.service';

describe('ExplorerFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExplorerFiltersService = TestBed.get(ExplorerFiltersService);
    expect(service).toBeTruthy();
  });
});
