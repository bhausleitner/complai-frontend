import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { RegulationSummary } from '../../../../shared/resources/regulation';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/core.state';
import { updateRegulationStatus } from '../../regulation.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'complai-explorer-entry',
  templateUrl: './explorer-entry.component.html',
  styleUrls: ['./explorer-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerEntryComponent implements OnInit {
  @Input() regulation: RegulationSummary;
  languages = ['German', 'French', 'Italian'];

  summary_page: string;
  translateLanguage: string;

  app_area = require('../../../../../assets/app_area/eu.svg');

  relevancy = 'complai.explorer.entry.relevancy';
  relevancyDegree = 'complai.explorer.entry.relevancyDegree';
  commitment = 'complai.explorer.entry.commitment';
  enforcement = 'complai.explorer.entry.enforcement';
  act = 'complai.explorer.entry.act';
  published = 'complai.explorer.entry.published';
  appArea = 'complai.explorer.entry.appArea';
  publisher = 'complai.explorer.entry.publisher';
  tags = 'complai.explorer.entry.tags';
  readMore = 'complai.explorer.entry.readMore';

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.summary_page = '/regulations/summary/' + this.regulation.id;
  }

  onClick() {
    this.store.dispatch(
      updateRegulationStatus({ id: this.regulation.id, status: 1 })
    );
  }
}
