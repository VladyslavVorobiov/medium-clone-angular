import { createAction, props } from '@ngrx/store';
import { IBackendErrors } from 'src/app/shared/interfaces/backendErrors.interface';
import { ICurrentUser } from 'src/app/shared/interfaces/currentUser.interface';
import { ActionTypes } from '../action-types';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
