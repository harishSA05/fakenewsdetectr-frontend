import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from './base-url.service';
const httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}
interface image2text {
  data:any;
  subject:string;
  type:string;
}

@Injectable({
  providedIn: 'root'
})
export class Image2textService {
  baseUrl:any;
  constructor(private http : HttpClient ,private url:BaseUrlService){
    this.baseUrl = this.url.baseUrl;
    console.log(this.baseUrl);
   }
  public uploadImage(image: File)  : Observable<image2text>{
    const formData = new FormData();
    formData.append('image',image, image.name);
    console.log(image);
    return this.http.post<image2text>(this.baseUrl+"/gettextfromimage", formData)
}
}
