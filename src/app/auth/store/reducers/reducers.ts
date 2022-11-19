import { Action, createReducer } from '@ngrx/store';
import { IAuthState } from '../../types/authState.interface';
import { GET_CURRENT_USER } from './get-current-user';
import { LOGIN } from './login';
import { REGISTER } from './register';

const initialState: IAuthState = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};

const authReducer = createReducer(initialState, ...REGISTER, ...LOGIN, ...GET_CURRENT_USER);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
