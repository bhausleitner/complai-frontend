import { createSelector } from '@ngrx/store';
import { selectRegulationsState } from '../../core/core.state';
import { RegulationsState } from './regulations.reducer';
import { RegulationStatus } from '../../shared/resources/regulation';
export const selectRegulationsSummaries = createSelector(
  selectRegulationsState,
  (state: RegulationsState) => state.regulations_summary
);

export const selectBookmarkedRegulations = createSelector(
  selectRegulationsState,
  (state: RegulationsState) =>
    state.regulations_summary.filter(
      x => x.status === RegulationStatus.Bookmarked
    )
);

export const selectInprogressRegulations = createSelector(
  selectRegulationsState,
  (state: RegulationsState) =>
    state.regulations_summary.filter(
      x => x.status === RegulationStatus.Inprogress
    )
);

export const selectCompliantRegulations = createSelector(
  selectRegulationsState,
  (state: RegulationsState) =>
    state.regulations_summary.filter(
      x => x.status === RegulationStatus.Compliant
    )
);
