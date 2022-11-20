import { Action, createReducer, on } from '@ngrx/store';
import { IFeedState } from '../../interfaces/feed-state.interface';
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from '../actions/get-feed.action';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state: IFeedState): IFeedState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state: IFeedState, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state: IFeedState): IFeedState => ({
      ...state,
      isLoading: false
    })
  )
);

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
