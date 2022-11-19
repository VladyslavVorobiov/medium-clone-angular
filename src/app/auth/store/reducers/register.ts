import { on } from '@ngrx/store';
import { IAuthState } from '../../types/authState.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';

export const REGISTER = [
  on(
    registerAction,
    (state: IAuthState): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
];
