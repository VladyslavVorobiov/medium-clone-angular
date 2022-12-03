import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SLUG } from 'src/app/shared/constants/route.constants';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagFeedComponent implements OnInit, OnDestroy {
  apiUrl: string = '';
  tagName: string = '';

  private _destroy$: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this._destroy$)).subscribe((params: Params) => {
      this.tagName = params[SLUG] || '';
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
