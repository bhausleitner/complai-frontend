import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'complai-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnderConstructionComponent implements OnInit {
  label = 'complain.shared.underconstruction';
  constructor() {}

  ngOnInit() {}
}
