import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ACCESS_TOKEN } from 'src/app/shared/constants/token.constant';

import { ICurrentUser } from 'src/app/shared/interfaces/current-user.interface';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { AuthService } from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from '../actions/get-current-user.action';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.ps.get(ACCESS_TOKEN);

        if (!token) {
          return of(
            getCurrentUserFailureAction({
              errors: { token: ['no access token'] }
            })
          );
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getCurrentUserFailureAction({
                errors: errorResponse.error
              })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private ps: PersistenceService) {}
}
