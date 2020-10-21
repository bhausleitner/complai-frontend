import { CompanyState } from './company.model';
import {
  actionLoadCompanyTags,
  actionLoadCompanyTagsSuccess,
  actionAddCompanyTag,
  actionRemoveCompanyTag
} from './company.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: CompanyState = {
  tags: []
};

const reducer = createReducer(
  initialState,
  on(actionLoadCompanyTags, (state, action) => ({ ...state, tags: [] })),
  on(actionLoadCompanyTagsSuccess, (state, action) => ({
    ...state,
    tags: action.tags
  })),
  on(actionRemoveCompanyTag, (state, action) => {
    const new_state = { ...state };
    const index = new_state.tags.indexOf(action.tag);

    if (index >= 0) {
      new_state.tags.splice(index, 1);
    }

    return new_state;
  }),
  on(actionAddCompanyTag, (state, action) => {
    const new_state = { ...state };
    // Add our fruit
    if ((action.tag || '').trim()) {
      new_state.tags.push(action.tag.trim());
    }

    return new_state;
  })
);

export function companyReducer(
  state: CompanyState | undefined,
  action: Action
) {
  return reducer(state, action);
}
