import { IAuthState } from 'src/app/pages/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/interfaces/feed-state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
