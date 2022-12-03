import { IArticleState } from 'src/app/pages/article/interfaces/article-state.interface';
import { IAuthState } from 'src/app/pages/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/interfaces/feed-state.interface';
import { IPopularTagsState } from '../modules/popular-tags/interfaces/popular-tags.state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
}
