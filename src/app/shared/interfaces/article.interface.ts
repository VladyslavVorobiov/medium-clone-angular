import { IProfile } from './profile.interface';

export interface IArticle {
  body: string;
  title: string;
  description: string;
  slug: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IProfile;
}
