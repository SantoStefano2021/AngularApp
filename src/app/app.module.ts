import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable"

import { AppComponent } from './app.component';
import { ExampleComponent } from '../example/example.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HttpComponentComponent } from './http-component/http-component.component';
import { InsertNewDispositivoComponent } from './insert-new-dispositivo/insert-new-dispositivo.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { WaterfoolComponent } from './waterfool/waterfool.component';
import { WaterfoolDeviceComponent } from './waterfool-device/waterfool-device.component';
import { LogicWaterfoolService } from './service/logic-waterfool.service';
import { LogoutWaterfoolService } from './service/logout-waterfool.service';
import { LoginComponent } from './login/login.component';
import { LoginOuthJwtService } from './login/login-outh-jwt.service';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent, SecondComponentComponent, HttpComponentComponent, InsertNewDispositivoComponent, WaterfoolComponent, WaterfoolDeviceComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'operation',
        component: HttpComponentComponent
      },
      {
        path: 'nuovoDispositivo',
        component: InsertNewDispositivoComponent
      },
      {
        path: 'waterfoolSensor',
        component: WaterfoolComponent
      },
      {
        path: 'waterfoolDevice',
        component: WaterfoolDeviceComponent
      }
    ])
  ],
  providers: [HttpComponentComponent, CookieService, HttpClientModule,
    LogicWaterfoolService, LogoutWaterfoolService, LoginOuthJwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
