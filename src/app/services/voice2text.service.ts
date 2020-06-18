import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import { Observable } from 'rxjs';
import { BaseUrlService } from './base-url.service';
interface voice2text {
  data:any;
  subject:string;
  type:string;
}
@Injectable({
  providedIn: 'root'
})
export class Voice2textService {
  baseUrl:any;
  constructor(private http : HttpClient ,private url:BaseUrlService){
    this.baseUrl = this.url.baseUrl;
    console.log(this.baseUrl);
   }
  uploadAudio(file): Observable<voice2text>{
    const formData = new FormData();
    console.log(file);
    formData.append('file',file, file.name);
    return this.http.post<voice2text>(this.baseUrl+"/gettextfromvoice",formData);
  }
}
