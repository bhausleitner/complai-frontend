import { Action, createReducer, on } from '@ngrx/store';
import {
  loadExplorerFilters,
  loadExplorerFiltersSuccess
} from './explorer-filters.actions';
import { ExplorerFilters } from '../../../../shared/resources/explorer-filters';

export const explorerFiltersFeatureKey = 'explorer-filters';

export interface ExplorerFiltersState {
  explorer_filters: ExplorerFilters;
}

export const initialState: ExplorerFiltersState = {
  explorer_filters: {
    application_areas: [],
    industries: [],
    type_of_acts: [],
    type_of_commitments: []
  }
};

const reducer = createReducer(
  initialState,
  on(loadExplorerFilters, () => initialState),
  on(loadExplorerFiltersSuccess, (state, { data }) => ({
    ...state,
    explorer_filters: data
  }))
);

export function explorerFiltersReducer(
  state: ExplorerFiltersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
