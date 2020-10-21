import { createSelector } from '@ngrx/store';
import { selectExplorerFiltersState } from '../../../../core/core.state';
import { ExplorerFiltersState } from './explorer-filters.reducer';

export const selectExplorerFilters = createSelector(
  selectExplorerFiltersState,
  (state: ExplorerFiltersState) => state.explorer_filters
);
