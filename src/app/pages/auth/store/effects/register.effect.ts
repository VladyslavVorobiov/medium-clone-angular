import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ACCESS_TOKEN } from 'src/app/shared/constants/token.constant';
import { ICurrentUser } from 'src/app/shared/interfaces/current-user.interface';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { AuthService } from '../../services/auth.service';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.ps.set(ACCESS_TOKEN, JSON.stringify(currentUser.token));

            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction(errorResponse.error));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
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
