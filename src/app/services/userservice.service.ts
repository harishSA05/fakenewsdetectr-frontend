import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from './base-url.service';

export class userdetails{
  email:string;
  password:string;

}

const httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl:any;
  constructor(private http : HttpClient ,private url:BaseUrlService){
    this.baseUrl = this.url.baseUrl;
    console.log(this.baseUrl);
   }
  addDetails(userdetails:userdetails):Observable<userdetails>{
        return this.http.post<userdetails>(this.baseUrl+"/login",userdetails,httpOptions);
  }
}
