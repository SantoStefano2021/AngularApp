import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginOuthJwtService {

  readonly loginJwt = 'http://localhost:8081/private/login';

  constructor(public http: HttpClient) { }


  login(loginForm: any): void{
    this.http.post(this.loginJwt, {loginForm})
      .subscribe();
  }
}
