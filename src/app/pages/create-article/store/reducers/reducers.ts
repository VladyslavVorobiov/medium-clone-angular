import { Action, createReducer, on } from '@ngrx/store';

import { ICreateArticleState } from '../../interfaces/create-article-state.interface';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from '../actions/create-article.action';

const initialState: ICreateArticleState = {
  isSubmitting: false,
  errors: undefined
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state: ICreateArticleState): ICreateArticleState => ({
      ...state,
      isSubmitting: true,
      errors: undefined
    })
  ),
  on(
    createArticleSuccessAction,
    (state: ICreateArticleState): ICreateArticleState => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    createArticleFailureAction,
    (state: ICreateArticleState, action): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
      errors: action.errors
    })
  )
);

export function reducers(state: ICreateArticleState, action: Action) {
  return createArticleReducer(state, action);
}
