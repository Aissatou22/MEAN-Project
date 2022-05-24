import { Pipe, PipeTransform } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Article } from './article';
import { ConnexionService } from './services/connexion-service';

//permettre de selectionner supprimer emprunter ou de faire des recherches

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  constructor(private cookieService: CookieService) { }


  transform(articles: Article[], motCle: string, choix: string): Article[] {
    var articleF = [];
    if (motCle === null || motCle === undefined) {
      articles.forEach((a) => {
        if (choix === undefined) {
          if (!this.cookieService.get('email').includes(a.email)) articleF.push(a);
        } else {
          if (choix.includes("emprunt") && !this.cookieService.get('email').includes(a.email)) {
            console.log("1 1");
            articleF.push(a);
          } else if (choix.includes("suppression") && this.cookieService.get('email').includes(a.email)) {
            console.log("1 2");
            articleF.push(a);
          }
        }
      })
    }
    else {
      articles.forEach((a) => {
        if (a.descriptif.toLocaleLowerCase().includes(motCle.toLocaleLowerCase())) {
          if (choix === undefined) {
            if (!this.cookieService.get('email').includes(a.email)) articleF.push(a);
          } else {
            if (choix.includes("emprunt") && !this.cookieService.get('email').includes(a.email)) {
              console.log("2 1");
              articleF.push(a);
            } else if (choix.includes("suppression") && this.cookieService.get('email').includes(a.email)) {
              console.log("2 2");
              articleF.push(a);
            }
          }

        }
      })
    }
    return articleF;
  }

}
