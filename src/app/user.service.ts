import {Injectable} from '@angular/core';
import {UserDetails} from './model/user-details';
import {HttpService} from './http.service';
import {Observable, Subject} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDetailsCache: Observable<UserDetails> = new Observable<UserDetails>();

  private userLogged: Subject<boolean> = new Subject();

  constructor(private httpService: HttpService, private router: Router) {
    this.userLogged.next(false);
  }

  userLoggedEventBus(): Observable<boolean> {
    return this.userLogged.asObservable();
  }

  getUserDetail(): Observable<UserDetails> {
    if (localStorage.getItem('token')) {
      this.userDetailsCache = this.httpService
        .getUserDetails()
        .pipe(shareReplay(1));

      return this.userDetailsCache;
    }

    console.log('user not logged');
  }

  saveTokenInLocalStorage(token: string): void {
    localStorage.setItem('token', token);
    this.userLogged.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userLogged.next(false);
    this.router.navigateByUrl('/');
    console.log('emittend logout event');
  }
}
