import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Article } from '../article';
import { ConnexionService } from '../services/connexion-service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['../connexion/connexion.component.css']
})
export class AddArticleComponent implements OnInit {

  dec:boolean = false;
  isErreur:boolean=false;
  articleAdded:boolean=false;

  constructor(private connService: ConnexionService, private router: Router, private cookieService: CookieService, 
    private http:HttpClient) { }

  ngOnInit() {
    if(this.cookieService.check('email')){
      this.dec = true;
    }
  }

  ajouter(f:NgForm){
    const articleToPost = new Article(); 
    let articleResp = new Article(); 
    articleToPost._id = 0;
    articleToPost.email = this.cookieService.get('email');
    articleToPost.nom = f.value.nom;
    articleToPost.descriptif = f.value.descriptif;
    articleToPost.lienPhoto = f.value.lienPhoto;
    articleToPost.prixNeuf = f.value.prixNeuf;
    this.http.post<any>('http://localhost:8000/add', articleToPost).subscribe(data => {
            if (data != null){
              this.isErreur = false;
              this.articleAdded = true;
              setTimeout(()=>{
                this.router.navigate(['biens']);
              }, 2000);
            }else{
                this.articleAdded = false;
                this.isErreur = true;
            }
        });
  }

  signOut(){
    this.ngOnInit();
    this.connService.signOut();
    window.location.reload();
    this.router.navigate(['']);
  }

}
