import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { EditArticleService } from '../../services/edit-article.service';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from '../actions/update-article.action';

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, payload }) => {
        return this.editArticleService.updateArticle(slug, payload).pipe(
          map((article: IArticle) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(updateArticleFailureAction({ errors: errorsResponse.error.errors }));
          })
        );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug]))
      ),
    {
      dispatch: false
    }
  );

  constructor(private actions$: Actions, private router: Router, private editArticleService: EditArticleService) {}
}
