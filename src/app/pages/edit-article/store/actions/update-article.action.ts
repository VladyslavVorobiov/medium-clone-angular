import { createAction, props } from '@ngrx/store';

import { IArticleBase } from 'src/app/shared/interfaces/article-base.interface';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { IBackendErrors } from 'src/app/shared/interfaces/backend-errors.interface';
import { ActionTypes } from '../action-types';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; payload: IArticleBase }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
