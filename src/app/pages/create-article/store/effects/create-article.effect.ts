import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { CreateArticleService } from '../../services/create-article.service';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from '../actions/create-article.action';

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ payload }) => {
        return this.createArticleService.createArticle(payload).pipe(
          map((article: IArticle) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(createArticleFailureAction({ errors: errorsResponse.error.errors }));
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug]))
      ),
    {
      dispatch: false
    }
  );

  constructor(private actions$: Actions, private router: Router, private createArticleService: CreateArticleService) {}
}
