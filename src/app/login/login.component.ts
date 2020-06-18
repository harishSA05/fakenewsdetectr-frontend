import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { UserserviceService } from "../services/userservice.service";
import { CookieService } from 'ngx-cookie-service';

export class userdetails {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email = new FormControl();
  password = new FormControl();
  userdetails = new userdetails();
  loginForm: FormGroup;
  data: any;
  success: boolean = false;
  result: any;
  hide: boolean = true;
  loggedIn: boolean = true;
  passContent:String;
  showPasscontent:boolean = false;
  
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userservice: UserserviceService,
    private loginservices: LoginService,
    private storage:CookieService
  ) {
    this.storage.set("login",'1');
  }

  ngOnInit() {

    this.storage.set("login",'1');

    this.loginForm = this.formbuilder.group({
      email: [null, Validators.required],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ])
      ]
    });

    if (
      this.loginservices.getLogin("email") !== null && this.loginservices.getLogin("email") !=="" && this.loginservices.getLogin("email")!=="Empty"  &&
      this.loginservices.getLogin("password") !== null && this.loginservices.getLogin("password") !=="" && this.loginservices.getLogin("password")!=="Empty"

    ){
      console.log("cookies");
      this.loggedIn = true;

    }
  }

  validateUser(email, password) {
    this.userdetails.email = email;
    this.userdetails.password = password;
   
    this.userservice.addDetails(this.userdetails).subscribe(res => {
      this.result = JSON.parse(JSON.stringify(res));
      let usernames = this.result.username;
      if (this.result.status === "success") {
        this.loginservices.setLogin("email", this.userdetails.email);
        this.loginservices.setLogin("password", this.result.password);
        this.storage.set("login",'0');
        this.storage.set("username",usernames);
        this.success = true;
        setTimeout( () => { 
          this.loggedIn = true;
          window.location.reload();
         }, 500 );

      } else if (this.result.status === "failure") {
        console.log("Failed");
        this.passContent = this.result.message;
        this.loggedIn = false;
        this.success = false;
        this.showPasscontent = true;

      }
    });
  }
}
