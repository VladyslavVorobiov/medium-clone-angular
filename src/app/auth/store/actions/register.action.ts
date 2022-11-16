import { createAction, props } from '@ngrx/store';
import { IRegisterRequest } from '../../types/registerRequest.interface';
import { ActionTypes } from '../action-types';

export const registerAction = createAction(ActionTypes.REGISTER, props<IRegisterRequest>());