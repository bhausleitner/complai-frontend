import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RegulationSummary } from '../../../shared/resources/regulation';
import { AppState, selectRegulationsState } from '../../../core/core.state';
import { Store, select } from '@ngrx/store';
import { loadRegulations } from '../regulation.actions';
import { selectRegulationsSummaries } from '../regulations.selectors';
import { loadExplorerFilters } from './explorer-filters/explorer-filters.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'complai-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerComponent implements OnInit {
  regulations$: Observable<Array<RegulationSummary>>;
  sortBy: Array<string> = [
    'Upcoming Changes',
    'Highest Priority',
    'Closest Enforcement Date'
  ];

  titleExplorer = 'complai.explorer.title.headline';
  titleInterest = 'complai.explorer.interest.headline';

  pageSizes: Array<number> = [60, 120];
  pageSize = 10
  from = 0
  to = 10

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.store.dispatch(loadRegulations());
    this.store.dispatch(loadExplorerFilters());

    this.regulations$ = this.store.pipe(select(selectRegulationsSummaries));
  }

  getCurrentPage(pageNumber) {
    this.from =  pageNumber * this.pageSize;
    this.to = this.from + this.pageSize;
  }
}
