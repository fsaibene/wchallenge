import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.sessionService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/home'], { queryParams: { return: state.url } });
        return false;
      }  }
  
}
