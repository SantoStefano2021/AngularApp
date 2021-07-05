import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable"
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { timer } from 'rxjs';
import { StructuralDevice, WaterfoolDeviceStructure } from './WaterfoolDeviceStructure';
import { LogicWaterfoolService } from '../service/logic-waterfool.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-waterfool-device',
  templateUrl: './waterfool-device.component.html',
  styleUrls: ['./waterfool-device.component.css']
})
export class WaterfoolDeviceComponent implements OnInit {

  readonly uriGetAllDevice = 'http://2.228.6.66:4581/getDevices';
  everyTenSeconds: Observable<number> = timer(0, 25000);
  headElements: string[] = ['Device', 'Descrizione Sensore', 'Unità di Misura'];
  observableDevice: Observable<WaterfoolDeviceStructure[]> = new Observable;
  device: StructuralDevice[] = [];
  subscriptions:Subscription[] = [];

  constructor(public http: HttpClient, public cookie: CookieService,
    public login:LogicWaterfoolService) { }

  async ngOnInit() {
    this.subscriptions.push(
    this.everyTenSeconds.subscribe(() => {
     this.getAllDevice();
    }));
  }


  async getAllDevice(){
    this.http.get<WaterfoolDeviceStructure[]>(this.uriGetAllDevice, { withCredentials: true })
      .pipe(map(res => Object.assign(new WaterfoolDeviceStructure(), res)))
      .subscribe((res) => {
        if (res.status === 0) {
          this.login.getLogin().subscribe(() => {
            this.getAllDevice();
          })
        } else {
          res.message.forEach(t => this.device.push(t));
        }
      }
      );
   }

  test(){
    this.observableDevice.pipe(map(res => Object.assign(new WaterfoolDeviceStructure(), res)))
    .subscribe(res => {
      res.message.forEach(t => this.device.push(t));
    });
  }

  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
