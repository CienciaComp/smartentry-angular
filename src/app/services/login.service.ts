import { Users } from './../models/users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(nomeUsuario:string, senha:string) {
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(nomeUsuario+":"+senha)})
    return this.http.get("/api/users");
  }

  findAll(): Observable<Users[]> {
    return this.http.get<Users[]>("/api/users");
  }
}
