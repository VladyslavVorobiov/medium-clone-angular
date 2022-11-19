import { Action, createReducer } from '@ngrx/store';
import { IAuthState } from '../../types/authState.interface';
import { LOGIN } from './login';
import { REGISTER } from './register';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};

const authReducer = createReducer(initialState, ...REGISTER, ...LOGIN);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
