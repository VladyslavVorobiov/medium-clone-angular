import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEditArticleState } from '../interfaces/edit-article-state.interface';

export const editArticleFeatureSelector = createFeatureSelector<IEditArticleState>('editArticle');

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.article
);

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.isSubmitting
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.isLoading
);

export const errorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.errors
);
