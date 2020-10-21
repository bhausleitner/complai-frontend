import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ExplorerFilters } from '../../../../shared/resources/explorer-filters';
import { AppState } from '../../../../core/core.state';
import { Store, select } from '@ngrx/store';
import { selectExplorerFilters } from './explorer-filters.selector';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'complai-explorer-filters',
  templateUrl: './explorer-filters.component.html',
  styleUrls: ['./explorer-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerFiltersComponent implements OnInit {
  explorerFilters$: Observable<ExplorerFilters>;

  titleSort = 'complai.explorer.filter.sort';
  titleArea = 'complai.explirer.filter.area';
  titleIndustry = 'complai.explirer.filter.industry';
  titleCommitment = 'complai.explirer.filter.commitment';
  titleAct = 'complai.explirer.filter.act';
  titleDate = 'complai.explirer.filter.date';

  sortBy: Array<string> = [
    'complai.explorer.filter.upcomingChanges',
    'complai.explorer.filter.highestPriority',
    'complai.explorer.filter.closestEnforcementDate'
  ];

  defaultAppAreas = ['complai.explirer.filter.Germany'];

  defaultIndustries = ['complai.explirer.filter.Food'];

  actType: string;
  commitment: string;
  industry: string;
  applicationArea: string;

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.explorerFilters$ = this.store.pipe(select(selectExplorerFilters));
  }
}
