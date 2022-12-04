import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IArticleBase } from 'src/app/shared/interfaces/article-base.interface';
import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';
import { createArticleAction } from './store/actions/create-article.action';
import { isSubmittingSelector, errorsSelector } from './store/selectors';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateArticleComponent implements OnInit {
  isSubmitting$!: Observable<boolean>;
  errors$!: Observable<IBackendErrors | undefined>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
  }

  onSubmit(payload: IArticleBase): void {
    this.store.dispatch(createArticleAction({ payload }));
  }
}
