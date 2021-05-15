import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../environments/environment';
import {LoginForm} from './forms/login';
import {Observable} from 'rxjs';
import {Token} from './model/token';
import {ApiError} from './model/apiError';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiURL;
  private readonly USER_RESOURCE = '/user';
  private readonly LOGIN_RESOURCE = '/login';

  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.apiUrl;
  }

  // todo should return array of erros | handle case when body is not instance of Error
  static extractErrorMessage(error: HttpErrorResponse): string {
    const msg = error.error as ApiError;
    return msg.messages[0].message;
  }

  postLoginForm(loginForm: LoginForm): Observable<Token> {
    return this.httpClient.post<Token>(`${this.apiURL}${this.LOGIN_RESOURCE}`, loginForm);
  }
}
