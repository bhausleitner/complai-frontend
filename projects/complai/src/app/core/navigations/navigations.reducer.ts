import { NavigationsState } from './navigations.model';
import {
  actionNavigationsChangeElement,
  actionNavigationsRest
} from './navigations.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: NavigationsState = {
  elements: [
    { link: 'landing/platform', label: 'complai.menu.platform' },
    { link: 'landing/solution', label: 'complai.menu.solution' },
    { link: 'landing/about', label: 'complai.menu.about' },
    { link: 'landing/register', label: 'complai.menu.register' }
  ],
  sideNavElements: [
    { link: 'landing/platform', label: 'complai.menu.platform' },
    { link: 'landing/solution', label: 'complai.menu.solution' },
    { link: 'landing/about', label: 'complai.menu.about' },
    { link: 'landing/register', label: 'complai.menu.register' }
  ],
  sideNavBottomElements: []
};

const reducer = createReducer(
  initialState,
  on(
    actionNavigationsChangeElement,
    (_, { navElements, sideNavElements, sideNavBottomElements }) => ({
      elements: navElements,
      sideNavElements: sideNavElements,
      sideNavBottomElements: sideNavBottomElements
    })
  ),
  on(actionNavigationsRest, (state, _) => initialState)
);

export function navigationsReducer(
  state: NavigationsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
