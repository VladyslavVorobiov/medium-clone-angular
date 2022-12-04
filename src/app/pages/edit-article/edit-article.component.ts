import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';

import { SLUG } from 'src/app/shared/constants/route.constants';
import { IArticleBase } from 'src/app/shared/interfaces/article-base.interface';
import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';
import { getArticleAction } from './store/actions/get-article.action';
import { updateArticleAction } from './store/actions/update-article.action';
import { isSubmittingSelector, errorsSelector, articleSelector, isLoadingSelector } from './store/selectors';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditArticleComponent implements OnInit {
  slug: string = '';
  article$!: Observable<IArticleBase>;
  isLoading$!: Observable<boolean>;
  isSubmitting$!: Observable<boolean>;
  errors$!: Observable<IBackendErrors | undefined>;

  constructor(private store: Store, private router: ActivatedRoute) {}

  ngOnInit() {
    this.initValues();
    this.fetchdata();
  }

  initValues(): void {
    this.slug = this.router.snapshot.paramMap.get(SLUG) || '';
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));

    this.article$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article) => ({
        title: article.title,
        body: article.body,
        description: article.description,
        tagList: article.tagList
      }))
    );
  }

  fetchdata(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(payload: IArticleBase): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, payload }));
  }
}
