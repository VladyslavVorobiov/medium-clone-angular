import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPopularTagsAction } from './store/actions/get-popular-tags.action';
import { errorSelector, isLoadingSelector, popularTagsSelector } from './store/selectors';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularTagsComponent implements OnInit {
  popularTags$!: Observable<string[] | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  initValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
