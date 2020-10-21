import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

interface ListItem {
  selected: boolean;
  value: number;
}

@Component({
  selector: 'complai-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaginatorComponent implements OnInit, OnChanges  {

  pages: Array<ListItem> = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false }
  ];


  @Input() pageSizeOptions: Array<number>;
  @Input() pageSize: number;
  @Input() totalNumOfItems: number;
  @Output() currentPageEmitter = new EventEmitter<number>();
  currentPage = 0;

  pageSizesList: Array<ListItem>;
  numberOfPages = 0
  from = 0;
  to = 3;

  constructor() {}
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.numberOfPages = Math.ceil(this.totalNumOfItems / this.pageSize)

    this.pages = [];
    for (let i = 0 ; i < this.numberOfPages; i++){
      this.pages.push({
        value: i,
        selected: false
      })
      if (i === this.currentPage)
      this.pages[this.currentPage].selected = true

    }

  }

  ngOnInit() {
    // this.pageSizesList = this.pageSizeOptions.map(item => {
    //   return { selected: false, value: item };
    // });

    // this.pageSizesList[0].selected = true;

  }


  pageClick(pageNumber) {
    this.pages[this.currentPage].selected  = false;
    this.pages[pageNumber].selected  = true
    this.currentPage = pageNumber

    this.currentPageEmitter.emit(this.currentPage);
  }

  incrementVisiblePages() {
    if (this.to > this.numberOfPages || this.currentPage === (this.numberOfPages - 1))
      return;

    this.from += 1
    this.to += 1

    this.pages[this.currentPage].selected  = false;
    this.currentPage += 1
    this.pages[this.currentPage].selected  = true;
    this.currentPageEmitter.emit(this.currentPage);
  }

  decrementVisiblePages() {
    if (this.from === 0)
      return;
    this.from -= 1
    this.to -= 1

    this.pages[this.currentPage].selected  = false;
    this.currentPage -= 1
    this.pages[this.currentPage].selected  = true;
    this.currentPageEmitter.emit(this.currentPage);

  }

}
