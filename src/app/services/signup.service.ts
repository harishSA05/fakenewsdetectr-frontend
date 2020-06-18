import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from './base-url.service';

const httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}


export class userdetails{
  email:string;
  password:string;
}


export class response{
  status:string;
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl:any;
  constructor(private http : HttpClient ,private url:BaseUrlService){
    this.baseUrl = this.url.baseUrl;
    console.log(this.baseUrl);
   }
  signup(userdetails:userdetails):Observable<response>{
    return this.http.post<response>(this.baseUrl+"/signup",userdetails,httpOptions);
  }
}
