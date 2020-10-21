import { AppState } from '../core.module';

export interface CompanyState {
  tags: Array<string>;
}

export interface State extends AppState {
  company: CompanyState;
}
