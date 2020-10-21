import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'complai-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SelectListComponent implements OnInit {
  @Input() labelText: string;
  @Input() options: Array<string>;
  @Input() multiple: boolean;

  selected: string;

  constructor() {}

  ngOnInit() {}
}
