import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routeAnimations, AppState } from '../../../core/core.module';
import { Store } from '@ngrx/store';

@Component({
  selector: 'complai-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class RegulationsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
