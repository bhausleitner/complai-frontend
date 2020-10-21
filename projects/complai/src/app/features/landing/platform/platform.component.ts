import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'complai-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
