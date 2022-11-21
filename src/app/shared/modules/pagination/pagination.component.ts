import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { numbersRange } from '../../utils/array.utils';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProp!: number;
  @Input('limit') limitProp!: number;
  @Input('url') urlProp: string = '';
  @Input('currentPage') currentPageProp: number = 1;

  pagesCount: number = 0;
  pages: Array<number> = [];

  constructor() {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProp / this.limitProp);
    this.pages = numbersRange(1, this.pagesCount);
  }
}
