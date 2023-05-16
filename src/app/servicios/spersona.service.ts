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
    return this.http.get('http://localhost:8080/traer');
  }
  private apiUrl = 'http://localhost:8080/crear';
  private apiExpUrl='http://localhost:8080/crear/exp';
  private apiEduUrl='http://localhost:8080/crear/educacion';
  private apiEditarPerso='http://localhost:8080/editar/persona/2';
  private apiEditarEducacion='http://localhost:8080/editar/educacion/2';
  private apiEditarExp='http://localhost:8080/editar/experiencia/2';
  private apiEditarProyect='http://localhost:8080/editar/proyectos/2';
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
  editarEducacion(educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.apiEditarEducacion,educacion, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }
  editarExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.apiEditarExp,experiencia, this.httpOptions)
    .pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }
  editarProyectos(proyectos:Proyectos):Observable<any>{
    return this.http.put<any>(this.apiEditarProyect,proyectos, this.httpOptions)
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
   // return this.http.get('http://localhost:8080/personas/traer')
  //}
}
