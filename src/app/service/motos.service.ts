import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Moto } from '../models/moto';
import { environment } from 'src/environments/environment';
import { Costos } from '../models/costos';

@Injectable({
  providedIn: 'root'
})
export class MotosService {
  
  public motoSelect!:Moto;
  
  constructor(private httpClient:HttpClient) { }
  
  //urlEndPoint:"http://localhost:9929"
  public getAll():Observable<Moto[]>{
    return this.httpClient.get<Moto[]>(environment.urlEndPoint+'/moto/list').pipe(
      catchError(e => {
        if(e.status==400){
           return throwError(() => e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      })
    ); 
  }


  public getById(idMoto:string):Observable<Moto>{
    return this.httpClient.get<Moto>(`${environment.urlEndPoint}/moto/get-by-id/${idMoto}`).pipe(
      catchError(e => {
        if(e.status==400){
           return throwError(() => e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      })
    ); 
  }

  public getCostos():Observable<Costos>{
    return this.httpClient.get<Costos>(`${environment.urlEndPoint}/moto/costo`).pipe(
      catchError(e => {
        if(e.status==400){
           return throwError(() => e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      })
    ); 
  }

}
