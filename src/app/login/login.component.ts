import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginOuthJwtService} from "./login-outh-jwt.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginOuth: LoginOuthJwtService) { }

  ngOnInit(): void {
  }

    login(loginForm: any): void{
      this.loginOuth.login(loginForm);
    }


}
