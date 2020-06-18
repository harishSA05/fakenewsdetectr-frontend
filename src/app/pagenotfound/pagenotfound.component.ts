import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(
    private storage: CookieService,
  ) { 
    this.storage.set("login", "0");
  }

  ngOnInit() {
    this.storage.set("login", "0");
  }

}
