import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'complai-select-list-bright',
  templateUrl: './select-list-bright.component.html',
  styleUrls: ['./select-list-bright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SelectListBrightComponent implements OnInit {
  @Input() labelText: string;
  @Input() options: Array<string>;
  @Input() multiple: boolean;
  @Input() default?: any;

  selected: any;

  constructor() {}

  ngOnInit() {
    this.selected = this.default;
  }
}
