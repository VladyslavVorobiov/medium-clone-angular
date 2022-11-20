import { IArticle } from 'src/app/shared/interfaces/article.interface';

export interface IGetFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}
