import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../article';
import { ConnexionService } from '../services/connexion-service';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { event } from 'jquery';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  idBien:Number;
  @Input()
  email:String;
  @Input()
  prixNeuf:String;
  @Input()
  lienPhoto:String;
  @Input()
  nom:String;
  @Input()
  descriptif:String;
  @Input()
  article:Article;
  @Input()
  idB;

  hide:boolean=false;
  hideS:boolean=false;
  
  constructor(private http: HttpClient, private router: Router
    , private cookieService: CookieService) { }

  ngOnInit() {
    const  component = this;
    console.log(this.article)
    this.lienPhoto = this.article.lienPhoto;
    this.email = this.article.email;
    this.nom = this.article.nom;
    this.prixNeuf = this.article.prixNeuf;
    this.descriptif = this.article.descriptif;
    this.idBien = this.article._id;
    if(this.email === this.cookieService.get('email')){
      this.hide = true;
    }else{
      this.hideS = true;
    }

    $('.b1').click(function(){
      var id = this.id;
      component.idButton(Number.parseInt(id));
    })
    $('#btn-emprunt-'+this.idB).click(function(){
      component.emprunter(component.idB);
    })
    
    $('#btn-suppression-'+this.idB).click(function(){
      component.supprimer(component.idB);
    })
  }

  idButton(id:Number){
    this.idB = id;
  }
  emprunter(idB:Number){
    const url = 'http://localhost:8000/pret';
    console.log(idB);
    this.http.post(url, {email : this.cookieService.get('email'), id : this.article._id}).subscribe((response) => {
      if(response!=null){
        this.hide=true;
        this.hideS = true;
        console.log('Prêté! : '+response[0]);
        this.router.navigateByUrl('about', { skipLocationChange: true }).then(() => {
          this.router.navigate(['biens']);
        });
      }else{
      }
   },
   (error) => {
      console.error("Erreur : ", error);
   });
  }

  supprimer(idB:Number){
    const url = 'http://localhost:8000/delete/'+idB;
    
    this.http.delete(url).subscribe((response) => {
      if(response!=null){
        this.hide = true;
        this.hideS=true;
        console.log('Supprimer! : '+response[0]);
        window.alert("Article supprimé!")
        this.router.navigateByUrl('about', { skipLocationChange: true }).then(() => {
          this.router.navigate(['biens']);
        });
      }else{
      }
   },
   (error) => {
      console.error("Erreur : ", error);
   });
  }
}
