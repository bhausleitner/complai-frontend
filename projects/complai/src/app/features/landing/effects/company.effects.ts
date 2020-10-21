import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CompanyService } from '../../../shared/services/company.service';
import {
  actionLoadCompanyTags,
  actionLoadCompanyTagsSuccess
} from '../../../core/company/company.actions';

@Injectable()
export class ComapnyEffects {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}

  loadCompanyTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLoadCompanyTags),
      mergeMap(action => {
        return this.companyService.getCompanyTags(action.website).pipe(
          map(payload => actionLoadCompanyTagsSuccess({ tags: payload })),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
