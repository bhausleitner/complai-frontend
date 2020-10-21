import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ExplorerFiltersService } from '../services/explorer-filters.service';
import {
  loadExplorerFilters,
  loadExplorerFiltersSuccess
} from '../explorer/explorer-filters/explorer-filters.actions';

@Injectable()
export class ExplorerFiltersEffects {
  constructor(
    private actions$: Actions,
    private explorerFiltersService: ExplorerFiltersService
  ) {}

  loadRegulationFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadExplorerFilters),
      mergeMap(() => {
        return this.explorerFiltersService.getRegulationFilters().pipe(
          map(payload => loadExplorerFiltersSuccess({ data: payload })),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
