import { IArticleState } from 'src/app/pages/article/interfaces/article-state.interface';
import { IAuthState } from 'src/app/pages/auth/types/authState.interface';
import { ICreateArticleState } from 'src/app/pages/create-article/interfaces/create-article-state.interface';
import { IEditArticleState } from 'src/app/pages/edit-article/interfaces/edit-article-state.interface';
import { IFeedState } from '../modules/feed/interfaces/feed-state.interface';
import { IPopularTagsState } from '../modules/popular-tags/interfaces/popular-tags.state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState;
}
