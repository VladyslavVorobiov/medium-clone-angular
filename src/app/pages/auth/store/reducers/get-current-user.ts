import { on } from '@ngrx/store';
import { IAuthState } from '../../types/authState.interface';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from '../actions/get-current-user.action';

export const GET_CURRENT_USER = [
  on(
    getCurrentUserAction,
    (state: IAuthState): IAuthState => ({
      ...state,
      isLoading: true,
      isLoggedIn: false,
      validationErrors: null
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      validationErrors: action.errors,
      currentUser: null
    })
  )
];
