import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from '../article';
import { User } from '../User';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient, private router: Router) { }
    userAdded = false;
    userNotAdded = false;

    getArticles(): Observable<Article[]>{
        /* const articles: Article[] = ARTICLES;
        return of(articles);*/
        return this.http.get<Article[]>('http://localhost:8000/biens');
    }

    getArticle(key: string): Observable<Article[]>{
        /* const articles: Article[] = ARTICLES.filter(a => a.key === key);
        return of(articles[0]);*/
        return this.http.get<Article[]>('http://localhost:8000/biens/' + key);
    }
}
