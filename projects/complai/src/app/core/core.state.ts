import {
  ActionReducerMap,
  MetaReducer ,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';
import { NavigationsState } from './navigations/navigations.model';
import { navigationsReducer } from './navigations/navigations.reducer';
import {
  regulationsReducer,
  RegulationsState
} from '../features/regulations/regulations.reducer';
import { CompanyState } from './company/company.model';
import { companyReducer } from './company/company.reducer';
import {
  explorerFiltersReducer,
  ExplorerFiltersState
} from '../features/regulations/explorer/explorer-filters/explorer-filters.reducer';
import { userReducer, UserState } from './user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer,
  navigations: navigationsReducer,
  regulations: regulationsReducer,
  explorerFilters: explorerFiltersReducer,
  company: companyReducer,
  user: userReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export const selectNavigationsState = createFeatureSelector<
  AppState,
  NavigationsState
>('navigations');

export const selectRegulationsState = createFeatureSelector<
  AppState,
  RegulationsState
>('regulations');

export const selectExplorerFiltersState = createFeatureSelector<
  AppState,
  ExplorerFiltersState
>('explorerFilters');

export const selectCompanyState = createFeatureSelector<AppState, CompanyState>(
  'company'
);

export const selectUserState = createFeatureSelector<AppState, UserState>(
  'user'
);

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
  navigations: NavigationsState;
  regulations: RegulationsState;
  explorerFilters: ExplorerFiltersState;
  company: CompanyState;
  user: UserState;
}
