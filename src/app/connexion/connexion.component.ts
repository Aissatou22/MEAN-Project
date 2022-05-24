import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnexionService } from '../services/connexion-service';
import { User } from '../User';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  authStatus: boolean;
  isErreur:boolean = false;
  isConn:boolean = false;
  user:User = new User();
  userSub:User = new User();
  constructor(private http: HttpClient, private router: Router, private conService : ConnexionService
    , private cookieService: CookieService) { }

  ngOnInit() {
    this.authStatus = this.conService.isAuth;
  }
  onSubmit(form: NgForm) {
    this.isConn = true;
    this.isErreur = false;
    console.log(form.value);
    var email = form.value.email;
    var mdp = form.value.mdp;
    const url = 'http://localhost:8000/login';
    /*const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'apllication/json',
        'Access-Control-Allow-Origin':'*'
      })
    };*/
    this.http.post(url, {email : email, mdp : mdp}/*, httpOptions*/).subscribe((response) => {
      console.log("********************"+response)
      if(response!=null){
        this.conService.signIn().then(
          () => {
            this.user = response[0];
            console.log(this.user);
            console.log('Sign in successful! : '+response);
            this.authStatus = this.conService.isAuth;
            this.conService.nom = this.user.nom+" "+this.user.prenom;
            this.conService.email = this.user.email;
            this.cookieService.set( 'email', this.user.email);
            //setTimeout(function(){ this.router.navigate(['incidents']); }, 1000);
            this.router.navigate(['biens']);
            
          }
        );
      }else{
        this.isConn = false;
        this.isErreur = true;
      }
      
      console.log("Response : ", response);
   },
   (error) => {
      this.isConn = false;
      this.isErreur = true;
      console.error("Erreur : ", error);
   });
}

}
