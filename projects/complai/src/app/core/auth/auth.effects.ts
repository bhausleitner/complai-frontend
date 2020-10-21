import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { tap, map, switchMap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { authLogin, authLogout, authLoginSuccess } from './auth.actions';
import {
  actionNavigationsRest,
  actionNavigationsChangeElement
} from '../navigations/navigations.actions';
import { NavElement, SideNavElement } from '../navigations/navigations.model';
import { setCurrentUser, resetCurrentUser } from '../user/user.actions';
import { AuthService } from './auth.service';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  navElements: Array<NavElement> = [];

  sideNavElements: Array<SideNavElement> = [
    {
      logo: 'tune',
      label: 'complai.feature.regulation.explorer.label',
      link: 'regulations'
    },
    {
      logo: 'view_week',
      label: 'complai.feature.workflow.label',
      link: 'workspace'
    },
    {
      logo: 'widgets',
      label: 'complai.feature.dashboard.label',
      link: '#'
    },
    { logo: 'chat', label: 'complai.feature.chat.label', link: '#' },
    { logo: 'forum', label: 'complai.feature.forums.label', link: '#' },
    { logo: 'restore', label: 'complai.feature.searched.label', link: '#' },
    // { logo: 'get_app', label: 'complai.feature.downloads.label', link: '#' },
    { logo: 'share', label: 'complai.feature.shared.label', link: '#' }
  ];

  sideNavBottomElements: Array<SideNavElement> = [
    { logo: 'settings', label: 'complai.menu.settings', link: 'settings' },
    {
      logo: 'error_outlined',
      label: 'complai.feature.feedback.label',
      link: '#'
    },
    { logo: 'help_outlined', label: 'complai.feature.help.label', link: '#' },
    { logo: 'keyboard_backspace', label: 'complai.menu.logout', link: '#' }
  ];

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router,
    private authService: AuthService
  ) {}

  // Here we send the auth request
  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogin),
        map(payload => {
          this.authService.login(payload.redirectPath)
        })
      ),
    { dispatch: false }
  );

  // If succeeded then we set the auth key and so forth here.
  loginSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(authLoginSuccess),
      map(payload => {
        this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true });
        this.router.navigate(['regulations']);
        return setCurrentUser({ user:  payload.user })
      }),
      switchMap((action) => [
        action,
        actionNavigationsChangeElement({
                  navElements: this.navElements,
                  sideNavElements: this.sideNavElements,
                  sideNavBottomElements: this.sideNavBottomElements
          }
      )])),
    {dispatch: true}
  );

  // This should be split into logut/logout success/failure
  // For now, apply a quick change
  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogout),
        map(() => {
          this.authService.logout();
          this.router.navigate(['']);
          this.localStorageService.setItem(AUTH_KEY, {
            isAuthenticated: false
          });
          return resetCurrentUser()
        }),
        switchMap(action => [
          action,
          actionNavigationsRest()
        ]),
      ),
    { dispatch: true }
  );
}
