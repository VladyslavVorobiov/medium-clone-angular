import { on } from '@ngrx/store';

import { IEditArticleState } from '../../interfaces/edit-article-state.interface';
import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction
} from '../actions/update-article.action';

export const UPDATE_ARTICLE = [
  on(
    updateArticleAction,
    (state: IEditArticleState): IEditArticleState => ({
      ...state,
      isSubmitting: true,
      errors: undefined
    })
  ),
  on(
    updateArticleSuccessAction,
    (state: IEditArticleState): IEditArticleState => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateArticleFailureAction,
    (state: IEditArticleState, action): IEditArticleState => ({
      ...state,
      isSubmitting: false,
      errors: action.errors
    })
  )
];
