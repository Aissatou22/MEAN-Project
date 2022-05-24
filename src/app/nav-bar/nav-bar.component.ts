import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConnexionService } from '../services/connexion-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
}) 
export class NavBarComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }
}
