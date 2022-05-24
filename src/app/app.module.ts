import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { Pipe, PipeTransform } from '@angular/core'; 
import { FilterPipe } from './filter.pipe';
import { AddArticleComponent } from './add-article/add-article.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [				
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    NotFoundComponent,
    ConnexionComponent,
      ArticleComponent,
      ArticleListComponent,
      InscriptionComponent,
      FilterPipe,
      AddArticleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TruncateModule,
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
