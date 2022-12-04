import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICreateArticleState } from '../interfaces/create-article-state.interface';

export const createArticleFeatureSelector = createFeatureSelector<ICreateArticleState>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState) => createArticleState.isSubmitting
);

export const errorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState) => createArticleState.errors
);
