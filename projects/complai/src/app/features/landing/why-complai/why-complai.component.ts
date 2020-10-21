import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'complai-why',
  templateUrl: './why-complai.component.html',
  styleUrls: ['./why-complai.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhyComplaiComponent implements OnInit {
  title = 'complai.feature.landing.whycomplai.title';
  subtitle = 'complai.feature.landing.whycomplai.subtitle';
  button_label = 'complai.feature.landing.whycomplai.button';
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
