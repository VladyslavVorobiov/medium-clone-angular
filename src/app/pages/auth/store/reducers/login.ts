import { on } from '@ngrx/store';
import { IAuthState } from '../../types/authState.interface';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

export const LOGIN = [
  on(
    loginAction,
    (state: IAuthState): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true
    })
  ),
  on(
    loginFailureAction,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
];
