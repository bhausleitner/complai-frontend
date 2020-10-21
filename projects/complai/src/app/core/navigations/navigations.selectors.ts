import { createSelector } from '@ngrx/store';

import { NavigationsState } from './navigations.model';
import { selectNavigationsState } from '../core.state';

export const selectNavigationElements = createSelector(
  selectNavigationsState,
  (state: NavigationsState) => state.elements
);

export const selectSideNavigationElements = createSelector(
  selectNavigationsState,
  (state: NavigationsState) => state.sideNavElements
);

export const selectSideNavigationBottomElements = createSelector(
  selectNavigationsState,
  (state: NavigationsState) => state.sideNavBottomElements
);
