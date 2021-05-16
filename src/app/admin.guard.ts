import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    if (!this.userService.isUserLogged()) {
      return of(this.router.parseUrl('/'));
    }

    return this.userService
      .getUserDetail()
      .pipe(map(userDetails => userDetails.role.includes('ADMIN') ? true : this.router.parseUrl('/')));
  }

}
