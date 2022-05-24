import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';
import {FilterPipe} from '../filter.pipe'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConnexionService } from '../services/connexion-service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  isArtEmpty = false;
  searchText;
  choix;
  dec:boolean = false;
  constructor(private articleService: ArticleService, private connService: ConnexionService, private router: Router, private cookieService: CookieService) { 
    
  }

  ngOnInit() {
    if(this.cookieService.check('email')){
      this.dec = true;
    }
    this.getArticles();
  }

  getArticles(): void{
    this.articleService
      .getArticles()
      .subscribe(articles => {
        this.articles = articles;
        if(this.articles === null || this.articles.length === 0) this.isArtEmpty = true;
      });
  }

  
  signOut(){
    this.ngOnInit();
    this.connService.signOut();
    window.location.reload();
    this.router.navigate(['']);
  }
}
