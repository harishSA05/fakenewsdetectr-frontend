import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from './base-url.service';
const httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}


interface noun2text {
    data:any;
    subject:string;
}
@Injectable({
  providedIn: 'root'
})


export class Para2nounService { 
  baseUrl:any;
  constructor(private http : HttpClient ,private url:BaseUrlService){
    this.baseUrl = this.url.baseUrl;
    console.log(this.baseUrl);
   }
  getNouns(data) : Observable<noun2text>{
    console.log("helloo");
    
    return this.http.post<noun2text>(this.baseUrl+"/getnounsfromtext_spacy",{data});
  }
}

