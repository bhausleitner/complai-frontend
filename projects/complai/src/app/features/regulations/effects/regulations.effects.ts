import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { RegulationsService } from '../services/regulations.service';
import {
  loadRegulations,
  loadRegulationsSuccess,
  updateRegulationStatus,
  updateRegulationStatusSuccess
} from '../regulation.actions';
import {
  NotificationService,
  LocalStorageService
} from '../../../core/core.module';
import {
  RegulationStatus,
  regulationStatusToString
} from '../../../shared/resources/regulation';
import { selectRegulationsState, AppState } from '../../../core/core.state';
import { Store, select } from '@ngrx/store';

export const REGULATIONS_KEY = 'REGULATIONS';

@Injectable()
export class RegulationsEffects {
  constructor(
    private actions$: Actions,
    private regulationsService: RegulationsService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>
  ) {}

  loadRegulations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRegulations),
      mergeMap(() => {
        return this.regulationsService.getJSON().pipe(
          map((payload) => loadRegulationsSuccess({ data: payload })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  // Placeholder when doing real update for the regulation status
  updateRegulationStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRegulationStatus),
      map((action) => updateRegulationStatusSuccess({ status: action.status }))
    )
  );

  persistRegulations = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          // loadRegulations,
          updateRegulationStatus
        ),
        withLatestFrom(this.store.pipe(select(selectRegulationsState))),
        tap(([_, regulations]) =>
          this.localStorageService.setItem(REGULATIONS_KEY, regulations)
        )
      ),
    { dispatch: false }
  );
}
