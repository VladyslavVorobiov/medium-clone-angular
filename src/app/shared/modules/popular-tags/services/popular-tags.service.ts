import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGetPopularTagsResponse } from '../interfaces/get-popular-tags.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<string[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get<IGetPopularTagsResponse>(url).pipe(map((response: IGetPopularTagsResponse) => response.tags));
  }
}
