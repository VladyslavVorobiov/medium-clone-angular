import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IArticleBase } from 'src/app/shared/interfaces/article-base.interface';
import { IArticleResponse } from 'src/app/shared/interfaces/article-response.interface';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(slug: string, payload: IArticleBase): Observable<IArticle> {
    const url = environment.apiUrl + '/articles/' + slug;

    return this.http
      .put<IArticleResponse>(url, { article: payload })
      .pipe(map((response: IArticleResponse) => response.article));
  }
}
