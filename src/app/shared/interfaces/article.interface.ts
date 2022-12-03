import { IArticleBase } from './article-base.interface';
import { IProfile } from './profile.interface';

export interface IArticle extends IArticleBase {
  slug: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IProfile;
}
