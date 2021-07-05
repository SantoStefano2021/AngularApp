import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LogoutWaterfoolService {

  readonly httpLogout = 'http://2.228.6.66:4581/logout';

  constructor(public http: HttpClient, public cookie: CookieService) { }


   closeSession(){
    this.http.post(this.httpLogout, null, {observe: 'response', withCredentials: true })
    .subscribe(value =>{
      console.log("Sono nella logout");
    })
  }
}
