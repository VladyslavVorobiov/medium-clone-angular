import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGetFeedResponse } from './interfaces/get-feed-response.interface';
import { getFeedAction } from './store/actions/get-feed.action';
import { errorSelector, feedSelector, isLoadingSelector } from './store/selectors';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string = '';

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<IGetFeedResponse | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
    this.fetchData();
  }

  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
