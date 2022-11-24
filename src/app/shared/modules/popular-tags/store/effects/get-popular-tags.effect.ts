import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { PopularTagsService } from '../../services/popular-tags.service';
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailureAction
} from '../actions/get-popular-tags.action';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getTags().pipe(
          map((popularTags: string[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private popularTagsService: PopularTagsService) {}
}
