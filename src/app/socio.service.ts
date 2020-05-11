import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Socio} from 'src/app/model/socio';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient) {}

  getSocioList(): Observable<any>{
    console.log(this.urlBase+"/listar");
      return this.http.get(this.urlBase + '/listar').pipe(
        map(response => response as Socio[])
      )
  }
  registrar(socio: Socio): Observable<any>{
    console.log( "enviando..");
    return this.http.post(this.urlBase+'/registrar',socio,{headers:this.httpHeaders} );
  }  
}

