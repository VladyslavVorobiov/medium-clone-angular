import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { IRegisterRequest } from '../types/registerRequest.interface';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../types/authResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';

    return this.http.post<IAuthResponse>(url, data).pipe(map((response: IAuthResponse) => response.user));
  }
}