import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routeAnimations } from '../../../core/core.module';

@Component({
  selector: 'complai-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
