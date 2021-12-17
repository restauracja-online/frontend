import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import {LoginForm} from './forms/login';
import {Observable} from 'rxjs';
import {Token} from './model/token';
import {ApiError} from './model/apiError';
import {SignUp} from './forms/sign-up';
import {UserDetails} from './model/user-details';
import {Address} from './forms/address';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiURL;
  private readonly USER_RESOURCE = '/user';
  private readonly LOGIN_RESOURCE = '/login';
  private readonly SIGNUP_RESOURCE = '/sign-up';

  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.apiUrl;
  }

  // todo should return array of erros | handle case when body is not instance of Error
  static extractErrorMessage(error: HttpErrorResponse): string {
    const msg = error.error as ApiError;
    return msg.messages[0].message;
  }

  postLoginForm(form: LoginForm): Observable<Token> {
    return this.httpClient.post<Token>(`${this.apiURL}${this.LOGIN_RESOURCE}`, form);
  }

  postSignUpForm(form: SignUp): Observable<UserDetails> {
    return this.httpClient.post<UserDetails>(`${this.apiURL}${this.SIGNUP_RESOURCE}`, form);
  }

  getUserDetails(): Observable<UserDetails> {
    return this.httpClient.get<UserDetails>(`${this.apiURL}${this.USER_RESOURCE}/me`);
  }

  saveAddress(form: Address): Observable<UserDetails> {
    return this.httpClient.post<UserDetails>(`${this.apiURL}${this.USER_RESOURCE}/address`, form);
  }
}
