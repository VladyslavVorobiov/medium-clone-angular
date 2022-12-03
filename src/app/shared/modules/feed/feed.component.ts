import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { parseUrl, stringify, ParsedUrl } from 'query-string';

import { PAGINATION_LIMIT } from '../../constants/pagination.constant';
import { IGetFeedResponse } from './interfaces/get-feed-response.interface';
import { getFeedAction } from './store/actions/get-feed.action';
import { errorSelector, feedSelector, isLoadingSelector } from './store/selectors';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnChanges, OnDestroy {
  @Input('apiUrl') apiUrlProps: string = '';

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<IGetFeedResponse | null>;

  limit: number = PAGINATION_LIMIT;
  baseUrl: string = '';
  currentPage: number = 1;

  private _destroy$: Subject<void> = new Subject();

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue;

    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));

    this.baseUrl = this.router.url.split('?')[0];
  }

  initListeners(): void {
    this.route.queryParams.pipe(takeUntil(this._destroy$)).subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
      this.fetchFeed();
    });
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl: ParsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });

    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
}
