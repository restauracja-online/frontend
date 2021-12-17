import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
      return next.handle(cloned);
    }
    // tslint:disable-next-line:no-console
    console.debug('Token not found in local storage');
    return next.handle(request);
  }
}
