import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  dec:boolean = false;

  constructor(private cookieService: CookieService){}

  ngOnInit(){
    if(this.cookieService.check('email')){
      this.dec = true;
    }
  }

  
  title = 'mean';
}
