import { createAction, props } from '@ngrx/store';

import { IArticleBase } from 'src/app/shared/interfaces/article-base.interface';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';
import { ActionTypes } from '../action-types';

export const createArticleAction = createAction(ActionTypes.CREATE_ARTICLE, props<{ payload: IArticleBase }>());

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
