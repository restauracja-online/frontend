import {Injectable} from '@angular/core';
import {UserDetails} from './model/user-details';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDetailsCache: Observable<UserDetails>;

  constructor(private httpService: HttpService) {
  }

  isUserLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserDetail(): Observable<UserDetails> {
    if (this.isUserLogged() && !this.userDetailsCache) {
      this.userDetailsCache = this.httpService
        .getUserDetails()
        .pipe(shareReplay(1));
    }

    return this.userDetailsCache;
  }
}
