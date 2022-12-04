import { on } from '@ngrx/store';

import { IEditArticleState } from '../../interfaces/edit-article-state.interface';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.action';

export const GET_ARTICLE = [
  on(
    getArticleAction,
    (state: IEditArticleState): IEditArticleState => ({
      ...state,
      isLoading: true,
      errors: undefined
    })
  ),
  on(
    getArticleSuccessAction,
    (state: IEditArticleState, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state: IEditArticleState): IEditArticleState => ({
      ...state,
      isLoading: false
    })
  )
];
