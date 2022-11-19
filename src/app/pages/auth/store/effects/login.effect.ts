import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ACCESS_TOKEN } from 'src/app/shared/constants/token.constant';

import { ICurrentUser } from 'src/app/shared/interfaces/currentUser.interface';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { AuthService } from '../../services/auth.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.ps.set(ACCESS_TOKEN, JSON.stringify(currentUser.token));

            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction(errorResponse.error));
          })
        );
      })
    )
  );

  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    {
      dispatch: false
    }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private ps: PersistenceService,
    private router: Router
  ) {}
}
