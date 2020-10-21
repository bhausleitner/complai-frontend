import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { selectSettingsState, selectNavigationsState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { AppState } from '../core.module';
import {
  actionNavigationsChangeElement,
  actionNavigationsRest
} from './navigations.actions';

export const NAVIGATIONS_KEY = 'NAVIGATIONS';

@Injectable()
export class NavigationsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private localStorageService: LocalStorageService
  ) {}

  persistNavigations = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionNavigationsChangeElement, actionNavigationsRest),
        withLatestFrom(this.store.pipe(select(selectNavigationsState))),
        tap(([_, navigations]) =>
          this.localStorageService.setItem(NAVIGATIONS_KEY, navigations)
        )
      ),
    { dispatch: false }
  );
}
