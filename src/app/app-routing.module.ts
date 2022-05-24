import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { FilterPipe } from './filter.pipe';
import { AddArticleComponent } from './add-article/add-article.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'biens', canActivate: [AuthGuard], component: ArticleListComponent },
  {path : 'about'/*, canActivate: [AuthGuard]*/, component : AboutComponent},
  {path : 'ajouter', canActivate: [AuthGuard], component : AddArticleComponent},
  {path : '404', component : NotFoundComponent},
  {path : '**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
