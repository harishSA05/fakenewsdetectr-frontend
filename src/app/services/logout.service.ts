import { Injectable, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  loggedIn:boolean = false;
  constructor(private storage : CookieService, private router:Router) { }
  logout(){
    console.log("logout service");
    
    this.loggedIn = false;
    
    this.storage.deleteAll();
    window.location.reload(true);
  }
}

