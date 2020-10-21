import { createSelector } from '@ngrx/store';
import { selectUserState } from '../core.state';
import { UserState } from './user.reducer';

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.current_user
);

export const selectCollaborators = createSelector(
  selectUserState,
  (state: UserState) => state.collaborators
);

export const selectOtherUsers = createSelector(
  selectUserState,
  (state: UserState) => state.otherUsers
);
