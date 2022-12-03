import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.action';
import { IArticleState } from '../../interfaces/article-state.interface';

const initialState: IArticleState = {
  isLoading: false,
  error: null,
  data: null
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state: IArticleState): IArticleState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state: IArticleState, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state: IArticleState): IArticleState => ({
      ...state,
      isLoading: false
    })
  ),
  on(routerNavigationAction, (): IArticleState => initialState)
);

export function reducers(state: IArticleState, action: Action) {
  return articleReducer(state, action);
}
