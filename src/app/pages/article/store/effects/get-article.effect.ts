import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.action';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private sharedArticleService: SharedArticleService) {}
}
