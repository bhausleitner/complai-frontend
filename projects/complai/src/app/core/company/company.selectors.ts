import { createSelector } from '@ngrx/store';

import { CompanyState } from './company.model';
import { selectCompanyState } from '../core.state';

export const selectCompanyTags = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.tags
);
