import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  usuarios():Observable<any>{
    return this.http.get('http://api-portafolio1.herokuapp.com/traer/users');
  }
  

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private apiUser='https://api-portafolio1.herokuapp.com/usuario/valido/4'
  comprobar(usuario:Usuario):Observable<any>{
    return this.http.post<boolean>(this.apiUser,usuario)
  }

  



  /*
  private users = [
    { email: 'ejemplo', password: '1234' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  constructor() {}

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return true;
    } else {
      return false;
    }
  }*/
}
