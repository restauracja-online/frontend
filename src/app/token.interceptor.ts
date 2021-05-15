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

  private readonly token: string;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: this.token
        }
      });
      return next.handle(cloned);
    }
    // tslint:disable-next-line:no-console
    console.debug('Token not found in local storage');
    return next.handle(request);
  }
}
