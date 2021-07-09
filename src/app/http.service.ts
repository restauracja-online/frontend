import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import {LoginForm} from './forms/login';
import {Observable} from 'rxjs';
import {Token} from './model/token';
import {ApiError} from './model/apiError';
import {SignUp} from './forms/sign-up';
import {UserDetails} from './model/user-details';
import {IngredientsDetails} from './model/ingredients-details';
import {IngredientsForm} from './forms/ingredients';
import {DishDetails} from './model/dish-details';
import {DishForm} from './forms/dish';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiURL;
  private readonly USER_RESOURCE = '/user';
  private readonly LOGIN_RESOURCE = '/login';
  private readonly SIGNUP_RESOURCE = '/sign-up';
  private readonly INGREDIENTS_RESOURCE = '/admin/ingredients';
  private readonly INGREDIENT_RESOURCE = '/admin/ingredient';
  private readonly DISHES_RESOURCE = '/admin/dishes';
  private readonly DISH_RESOURCE = '/admin/dish';

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

  postIngredients(form: IngredientsForm): Observable<IngredientsDetails> {
    return this.httpClient.post<IngredientsDetails>(`${this.apiURL}${this.INGREDIENTS_RESOURCE}`, form);
  }

  putIngredients(form: IngredientsForm): Observable<IngredientsDetails> {
    return this.httpClient.put<IngredientsDetails>(`${this.apiURL}${this.INGREDIENTS_RESOURCE}`, form);
  }

  getIngredients(): Observable<IngredientsDetails[]> {
    return this.httpClient.get<any>(`${this.apiURL}${this.INGREDIENTS_RESOURCE}`);
  }

  getIngredient(ingredientId: number): Observable<IngredientsDetails> {
    return this.httpClient.get<IngredientsDetails>(`${this.apiURL}${this.INGREDIENT_RESOURCE}`,
      {params: new HttpParams().set('ingredientId', ingredientId.toString())});
  }

  removeIngredient(ingredientId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}${this.INGREDIENT_RESOURCE}`,
      {params: new HttpParams().set('ingredientId', ingredientId.toString())});
  }

  getDishes(): Observable<DishDetails[]> {
    return this.httpClient.get<DishDetails[]>(`${this.apiURL}${this.DISHES_RESOURCE}`);
  }

  postDishes(dishForm: DishForm): Observable<DishDetails> {
    return this.httpClient.post<DishDetails>(`${this.apiURL}${this.DISH_RESOURCE}`, dishForm);
  }

  getDish(dishId: number): Observable<DishDetails> {
    return this.httpClient.get<DishDetails>(`${this.apiURL}${this.DISH_RESOURCE}`,
      {params: new HttpParams().set('dishId', dishId.toString())});
  }

  putDish(form: DishForm): Observable<DishDetails> {
    return this.httpClient.put<DishDetails>(`${this.apiURL}${this.DISH_RESOURCE}`, form);
  }

  removeDish(dishId: number): Observable<DishDetails> {
    return this.httpClient.delete<DishDetails>(`${this.apiURL}${this.DISH_RESOURCE}`,
      {params: new HttpParams().set('dishId', dishId.toString())});
  }

}
