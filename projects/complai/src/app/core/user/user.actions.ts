import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const setCurrentUser = createAction(
  '[User] Set current user',
  props<{ user: User }>()
);

export const resetCurrentUser = createAction('[User] Reset current user');


export const actionAddCollaborator = createAction(
  '[User] Add  collaborator',
  props<{ user: User }>()
);
