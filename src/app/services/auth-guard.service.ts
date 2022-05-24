import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion-service';
import { CookieService } from 'ngx-cookie-service';
//import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private connService: ConnexionService,
              private router: Router, private cookieService: CookieService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.cookieService.check('email')) {
      return true;
    } else {
      this.router.navigate(['']);
    }
  }
}