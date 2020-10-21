import { createAction, props } from '@ngrx/store';

export const loadExplorerFilters = createAction(
  '[Regulation Filters] Load Regulation Filters'
);

export const loadExplorerFiltersSuccess = createAction(
  '[Regulation Filters] Load Regulations Filters Success',
  props<{ data: any }>()
);

export const loadExplorerFiltersFailure = createAction(
  '[Regulation Filters] Load Regulations Filters Failure',
  props<{ error: any }>()
);
