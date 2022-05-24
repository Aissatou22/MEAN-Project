import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class ConnexionService{

    constructor(private cookieService: CookieService) {
    }
    ngOnInit(): void {
    }

    isAuth = false;
    nom = "";
    email = "";
    id = 0;
  
    signIn() {
        return new Promise( 
            (resolve) => {
                  this.isAuth = true;
                  resolve(true);
            }
          );
    }
  
    signOut() {
      this.isAuth = false;
      this.cookieService.delete('email');
    }
}