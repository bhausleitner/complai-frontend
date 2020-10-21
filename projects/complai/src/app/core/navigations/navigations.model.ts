import { AppState } from '../core.module';

export interface NavElement {
  label: string;
  link: string;
}

export interface SideNavElement {
  logo?: string;
  label: string;
  link: string;
}

export interface NavigationsState {
  elements: Array<NavElement>;
  sideNavElements: Array<SideNavElement>;
  sideNavBottomElements: Array<SideNavElement>;
}

export interface State extends AppState {
  navigations: NavigationsState;
}
