import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { SLUG } from 'src/app/shared/constants/route.constants';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { currentUserSelector } from '../auth/store/selectors';
import { getArticleAction } from './store/actions/get-article.action';
import { articleSelector, errorSelector, isLoadingSelector } from './store/selectors';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  slug: string = '';
  article$!: Observable<IArticle | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  isAuthor$!: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  initValues(): void {
    this.slug = this.route.snapshot.paramMap.get(SLUG) || '';

    this.article$ = this.store.pipe(select(articleSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ]).pipe(
      map(([article, currentUser]) => {
        return !article || !currentUser ? false : article?.author.username === currentUser?.username;
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
