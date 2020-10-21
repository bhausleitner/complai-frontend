import { Action, createReducer, on } from '@ngrx/store';
import {
  loadRegulations,
  loadRegulationsSuccess,
  updateRegulationStatus
} from './regulation.actions';
import { RegulationSummary } from '../../shared/resources/regulation';

export const regulationsFeatureKey = 'regulations';

export interface RegulationsState {
  regulations_summary: RegulationSummary[];
}

export const initialState: RegulationsState = {
  regulations_summary: []
};

const reducer = createReducer(
  initialState,
  on(loadRegulationsSuccess, (state, { data }) => ({
    ...state,
    regulations_summary: data
  })),
  on(updateRegulationStatus, (state, { id, status }) => {
    const new_state = { ...state };
    new_state.regulations_summary = new_state.regulations_summary.map(
      (item, index) => {
        if (index !== id) {
          return item;
        }
        return {
          ...item,
          status: status
        };
      }
    );
    return new_state;
  })
);

export function regulationsReducer(
  state: RegulationsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
