import { createAction, props } from '@ngrx/store';
import {
  RegulationStatus,
  RegulationSummary
} from '../../shared/resources/regulation';

export const loadRegulations = createAction('[Regulation] Load Regulations');

export const loadRegulationsSuccess = createAction(
  '[Regulation] Load Regulations Success',
  props<{ data: RegulationSummary[]  }>()
);

export const loadRegulationsFailure = createAction(
  '[Regulation] Load Regulations Failure',
  props<{ error: any }>()
);

export const updateRegulationStatus = createAction(
  '[Regulation] Update Regulations Status',
  props<{ id: number; status: RegulationStatus }>()
);

export const updateRegulationStatusSuccess = createAction(
  '[Regulation] Update Regulations Status Success',
  props<{ status: RegulationStatus }>()
);
