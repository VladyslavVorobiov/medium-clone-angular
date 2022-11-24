import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPopularTagsState } from '../interfaces/popular-tags.state.interface';

export const popularTagsFeatureSelector = createFeatureSelector<IPopularTagsState>('popularTags');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.data
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.error
);
