import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable"
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { Body, WaterfoolStructure } from './WaterfoolStructure';
import { map } from 'rxjs/operators';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';
import { LogicWaterfoolService } from '../service/logic-waterfool.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
};

@Component({
  selector: 'app-waterfool',
  templateUrl: './waterfool.component.html',
  styleUrls: ['./waterfool.component.css']
})
export class WaterfoolComponent implements OnInit {

  readonly uriGetAllSensor = 'http://2.228.6.66:4581/getSensors';
  waterfool: Observable<WaterfoolStructure[]>;
  finalObject: Body[] = [];
  subscriptions:Subscription[] = [];
  headElements: string [] = ['Id Sensore', 'matricola Sensore', 'Prima Misurazione', 'Seconda Misurazione', 'Data Misurazione'];

  everyTenSeconds: Observable<number> = timer(0, 25000);
  constructor(public http: HttpClient,  public cookie: CookieService,
    public login: LogicWaterfoolService) {
    this.waterfool = new Observable;
  }

  ngOnInit(): void {
  let body = new HttpParams();
  body.set('username', 'wtech_admin');
  body.set('password', 'WTech_2021X');
  let headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json');
  headers.set('Access-Control-Allow-Credentials', 'true');
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');

  this.subscriptions.push(
    this.everyTenSeconds.subscribe(() => {
      this.getAllSensor();
     }));
  }

  async getAllSensor(){
            await this.http.get(this.uriGetAllSensor, {withCredentials: true })
            .pipe(map(res => Object.assign(new WaterfoolStructure(), res))
            ).subscribe((res: WaterfoolStructure) => {
              console.log("Valore " +res);
              if(res.status === 0){
                this.login.getLogin().subscribe(() => {
                  this.getAllSensor();
                })
               }else{
                res.message.forEach(t => this.finalObject.push(t));
               }
            })
  }
  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
