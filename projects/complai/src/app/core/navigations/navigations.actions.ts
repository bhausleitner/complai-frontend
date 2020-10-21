import { createAction, props } from '@ngrx/store';

import { NavElement, SideNavElement } from './navigations.model';

export const actionNavigationsChangeElement = createAction(
  '[Navigations] Change Navigation Element',
  props<{
    navElements: Array<NavElement>;
    sideNavElements: Array<SideNavElement>;
    sideNavBottomElements: Array<SideNavElement>;
  }>()
);

export const actionNavigationsRest = createAction(
  '[Navigations] Reset Navigation Elements'
);
