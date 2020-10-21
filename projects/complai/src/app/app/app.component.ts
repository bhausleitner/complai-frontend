import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

import {
  authLogout,
  routeAnimations,
  AppState,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
  selectNavigationElements,
  authLogin
} from '../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from '../core/settings/settings.actions';
import {
  NavElement,
  SideNavElement
} from '../core/navigations/navigations.model';
import {
  selectSideNavigationBottomElements,
  selectSideNavigationElements
} from '../core/navigations/navigations.selectors';
import { User } from '../core/user/user.model';
import { selectUser } from '../core/user/user.selectors';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'complai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../../assets/logo.png');
  logo_blue = require('../../assets/logo.svg');
  languages = ['en', 'de'];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;
  navigation$: Observable<Array<NavElement>>;
  navigationSideMenu$: Observable<Array<SideNavElement>>;
  navigationSideMenuBottom$: Observable<Array<SideNavElement>>;
  user$: Observable<User>;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private authService: AuthService,

  ) {
    this.authService.runInitialLoginSequence()
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    this.navigation$ = this.store.pipe(select(selectNavigationElements));
    this.user$ = this.store.pipe(select(selectUser));

    this.navigationSideMenu$ = this.store.pipe(
      select(selectSideNavigationElements)
    );
    this.navigationSideMenuBottom$ = this.store.pipe(
      select(selectSideNavigationBottomElements)
    );
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  onSignInClick() {
    this.store.dispatch(authLogin({ redirectPath: '/regulations/explorer'}));
  }
}
