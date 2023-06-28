import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, catchError, throwError} from 'rxjs';
import {Persona} from '../clases/persona';
import{Experiencia} from '../clases/experiencia';
import {Educacion} from '../clases/educacion';
import { tap } from 'rxjs/operators';
import { Proyectos } from '../clases/proyectos';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {
  constructor(private http:HttpClient) { }
  probando():Observable<any>{
    return this.http.get('https://entregaback-end-production.up.railway.app/traer/perso');
  }
  
  private apiUrl = 'https://entregaback-end-production.up.railway.app/crear';
  private apiExpUrl='https://entregaback-end-production.up.railway.app/crear/exp';
  private apiEduUrl='https://entregaback-end-production.up.railway.app/crear/educacion';
  private apiEditarPerso='https://entregaback-end-production.up.railway.app/editar/persona/4';
  private apiEditarEducacion='https://entregaback-end-production.up.railway.app/editar/educacion';
  private apiEditarExp='https://entregaback-end-production.up.railway.app/editar/experiencia';
  private apiEditarProyect='https://entregaback-end-production.up.railway.app/editar/proyectos/4';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  editarPersona(persona:Persona):Observable<any>{
    
    return this.http.put<any>(this.apiEditarPerso,persona, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }
  editarEducacion(educacion:any,id:any):Observable<any>{
    const url=`this.apiEditarEducacion/${id}`
    console.log(url);
    return this.http.put<any>(`https://entregaback-end-production.up.railway.app/editar/educacion/${id}`,educacion, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }
  editarExperiencia(experiencia:Experiencia,id:any):Observable<any>{
    
    return this.http.put<any>(`https://entregaback-end-production.up.railway.app/editar/experiencia/${id}`,experiencia, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }
  editarProyectos(proyectos:Proyectos,id:any):Observable<any>{
    return this.http.put<any>(`https://entregaback-end-production.up.railway.app/editar/proyectos/${id}`,proyectos, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }

























  crearExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(this.apiExpUrl,experiencia, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }
  crearEducacion(educacion:Educacion):Observable<any>{
    return this.http.post<any>(this.apiEduUrl,educacion, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }
  createPersona(persona:Persona): Observable<any> {
    return this.http.post<any>(this.apiUrl, persona, this.httpOptions)
      .pipe(
        tap(response => console.log(response)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }




  //apiPrueba():Observable<any>{
   // return this.http.get('https://entregaback-end-production.up.railway.app/personas/traer')
  //}*/
}
