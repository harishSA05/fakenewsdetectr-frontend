import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
baseUrl = "http://127.0.0.1/";
  constructor() {  }
}
