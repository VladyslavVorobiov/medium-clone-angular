import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/interfaces/current-user.interface';
import { IRegisterRequest } from '../types/registerRequest.interface';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../types/authResponse.interface';
import { ILoginRequest } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';

    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login';

    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';

    return this.http.get<IAuthResponse>(url).pipe(map(this.getUser));
  }

  private getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }
}
