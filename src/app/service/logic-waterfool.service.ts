import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicWaterfoolService {

  readonly uriLogin = 'http://2.228.6.66:4581/login';

  constructor(public http: HttpClient) { }


   getLogin(): Observable<any>{
    return this.http.post(this.uriLogin, {username: 'wtech_admin', password:'WTech_2021X'}, 
    {observe: 'response', withCredentials: true});
  }
}
