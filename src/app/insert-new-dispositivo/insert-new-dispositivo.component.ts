import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable"
import {HttpClient} from "@angular/common/http";
import { DispositivoMedico } from '../http-component/DispositivoMedico';
import {HttpComponentComponent} from '../http-component/http-component.component';

@Component({
  selector: 'app-insert-new-dispositivo',
  templateUrl: './insert-new-dispositivo.component.html',
  styleUrls: ['./insert-new-dispositivo.component.css']
})
export class InsertNewDispositivoComponent implements OnInit {
  readonly common = 'http://localhost:8081/private';
  nuovoDispositivo: boolean = false;
  constructor(public http: HttpClient, public component: HttpComponentComponent) { }

  ngOnInit(): void {
  }


  NuovoDispositivo(){
    this.nuovoDispositivo = true;
  }

  onSubmit(newDispositivo: any){
    this.http.post(this.common + '/insert', newDispositivo)
    .subscribe(data =>{
      this.component.findAll();
    })
  }
}
