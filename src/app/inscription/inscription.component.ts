import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['../connexion/connexion.component.css']
})
export class InscriptionComponent implements OnInit {

  isIsn = false;
  isErreur = false;
  userAdded = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  signUp(f: NgForm){
    const userToPost = new User(); 
    let userResp = new User(); 
    userToPost._id = 0;
    userToPost.email = f.value.email;
    userToPost.mdp = f.value.mdp;
    userToPost.nom = f.value.nom;
    userToPost.prenom = f.value.prenom;
    userToPost.ville = f.value.ville;
    userToPost.adresse = f.value.adresse;
    userToPost.telephone = f.value.telephone;
    this.http.post<any>('http://localhost:8000/signup', userToPost).subscribe(data => {
            if (data != null){
              userResp = data[0];
              console.log(userResp);
              this.isErreur = false;
              this.userAdded = true;
              this.router.navigate(['']);
            }else{
                this.userAdded = false;
                this.isErreur = true;
            }
        });
  }

}
