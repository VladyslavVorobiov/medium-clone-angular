import { createAction, props } from '@ngrx/store';
import { IGetFeedResponse } from '../../interfaces/get-feed-response.interface';
import { ActionTypes } from '../action-types';

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{ url: string }>());

export const getFeedSuccessAction = createAction(ActionTypes.GET_FEED_SUCCESS, props<{ feed: IGetFeedResponse }>());

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
