import { Component, OnInit } from '@angular/core';
import { LogoutWaterfoolService } from './service/logout-waterfool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(public logout: LogoutWaterfoolService){}

    logoutFunction(){
      this.logout.closeSession();
    }
  ngOnInit() {}
}
