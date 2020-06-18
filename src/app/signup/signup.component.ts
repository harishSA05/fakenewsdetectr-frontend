import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import {Router} from '@angular/router'
export class userdetails {
  name: string;
  email: string;
  password: string;
  cnfpassword: string;
  mobile: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name = new FormControl();
  email = new FormControl();
  password = new FormControl();
  cnfpassword = new FormControl();
  mobile = new FormControl();

  userdetails = new userdetails();
  signupForm: FormGroup;
  data: any;
  success: boolean = false;
  result: any;
  hide: boolean = true;
  constructor(private formbuilder: FormBuilder, private signup:SignupService,private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ])
      ],
      cnfpassword: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ])
      ],
      mobile: [null, Validators.required],
    });

  }

  validateUser(name,email, password,cnfpassword, mobile){
      this.userdetails.name = name;
      this.userdetails.email = email;
      this.userdetails.password = password;
      this.userdetails.mobile = mobile;

      this.signup.signup(this.userdetails).subscribe(res =>{
          if(res.status === "success") {
            this.router.navigate(['/']);
          }       
      });
  }

}
