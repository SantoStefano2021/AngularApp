import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable"
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { DispositivoMedico } from './DispositivoMedico';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headersa: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html'
})
export class HttpComponentComponent implements OnInit {

  readonly common = 'http://localhost:8081/private';
  dispMedico: Observable<DispositivoMedico[]>;
  headElements: string [] = ['Matricola', 'Nome Dispositivo', 'Data misurazione', 'Azioni'];
  nuovoDispositivo: boolean = false;
  nomeDispositivo: string = '';
  
  newDispositivoM: any; 

  constructor(public http: HttpClient, public cookie: CookieService) {
    this.dispMedico = new Observable;
  }

  findAll(){
    this.cookie.set('access', 'true');
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Credentials', '*');
    headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.set('Access-Control-Allow-Methods', '*');
    headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    this.dispMedico = this.http.get<DispositivoMedico[]>(this.common + '/findAll', {'withCredentials': true,  'headers':headers });
  }


  findByNomeDipositivo(deviceName: any){
    let param = new HttpParams().set('?nomeDispositivo', 'Termometro');
    this.dispMedico = this.http.get<DispositivoMedico[]>(this.common + '/findByNomeDispositivo?nomeDispositivo='+deviceName);
  }


  ngOnInit(): void {
  }


  Delete(dispSelezionato: String){
    console.log("Id Dispositivo " + dispSelezionato);
    this.http.delete(this.common + '/deleteDispositivo?deviceName=' + dispSelezionato)
    .subscribe(data => {
      this.findAll();
    })
  }
 
}
