import { Action, createReducer } from '@ngrx/store';
import { IEditArticleState } from '../../interfaces/edit-article-state.interface';
import { GET_ARTICLE } from './get-article';
import { UPDATE_ARTICLE } from './update-article';

const initialState: IEditArticleState = {
  isLoading: false,
  article: undefined,
  isSubmitting: false,
  errors: undefined
};

const editArticleReducer = createReducer(initialState, ...UPDATE_ARTICLE, ...GET_ARTICLE);

export function reducers(state: IEditArticleState, action: Action) {
  return editArticleReducer(state, action);
}
