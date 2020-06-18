import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private storage:CookieService) { }

  public setLogin(key:string,value:any):void{
      this.storage.set(key,value);
    
  }

  public getLogin(key: string): string {
       
     
    return this.storage.get(key);
    
} 
}
