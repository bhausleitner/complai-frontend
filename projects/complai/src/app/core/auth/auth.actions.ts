import { createAction, props } from '@ngrx/store';
import { User } from '../user/user.model';

export const authLogin = createAction('[Auth] Login',
props<{redirectPath: string}>()
);

export const authLogout = createAction('[Auth] Logout');

export const authLoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);
