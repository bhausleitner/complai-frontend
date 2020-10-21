import { createAction, props } from '@ngrx/store';
import { User } from '../../../core/user/user.model';

export const registerNewUser = createAction(
  '[Registration] register new user',
  props<{ data: User }>()
);

export const registerNewUserSuccess = createAction(
  '[Registration] register new user Success',
  props<{ user: User }>()
);

export const registerNewUserFailure = createAction(
  '[Registration] register new user Failure',
  props<{ error: any }>()
);
