import { Action, createReducer, on } from '@ngrx/store';
import { IPopularTagsState } from '../../interfaces/popular-tags.state.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from '../actions/get-popular-tags.action';

const initialState: IPopularTagsState = {
  data: null,
  isLoading: false,
  error: null
};

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state: IPopularTagsState): IPopularTagsState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state: IPopularTagsState, action): IPopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.popularTags
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state: IPopularTagsState): IPopularTagsState => ({
      ...state,
      isLoading: false
    })
  )
);

export function reducers(state: IPopularTagsState, action: Action) {
  return popularTagsReducer(state, action);
}
