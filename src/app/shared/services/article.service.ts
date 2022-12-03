import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IArticle } from '../interfaces/article.interface';
import { IGetArticleResponse } from '../interfaces/get-article-response.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = environment.apiUrl + '/articles/' + slug;

    return this.http.get<IGetArticleResponse>(fullUrl).pipe(map((response: IGetArticleResponse) => response.article));
  }
}
