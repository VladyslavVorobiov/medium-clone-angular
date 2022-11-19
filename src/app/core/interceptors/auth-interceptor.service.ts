import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN } from 'src/app/shared/constants/token.constant';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private ps: PersistenceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.ps.get(ACCESS_TOKEN);

    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    });

    return next.handle(request);
  }
}
