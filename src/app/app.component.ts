import { Component, OnInit } from "@angular/core";
import { LogoutService } from "src/app/Services/logout.service";
import { Inject, Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "fakenewsdetector";
  login: any;
  username: any;
  user: any;
  Logout: boolean = false;

  constructor(
    private logoutservice: LogoutService,
    private storage: CookieService
  ) {
    this.login = parseInt(this.storage.get("login"));
    this.user = this.storage.get("username");
    this.username = this.user;
    console.log(this.login);
    this.run();
  }

  ngOnInit(): void {}

  logout() {
    this.logoutservice.logout();
    this.login = 1;
  }

  run() {
    if (this.login === 1) {
      this.Logout = false;
    } else if (this.login === 0) {
      this.Logout = true;
    }
  }
}
