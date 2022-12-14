import { Router } from '@angular/router';
import { Users } from './../models/users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: String = environment.baseUrl

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http:HttpClient, private router : Router) { }

  public login(usuario: Users) {
    if(usuario.nomeUsuario === 'Henrique' && 
      usuario.senha === '123') {
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true)

        this.router.navigate(['smartentry/home'])
      
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false)
      }
  }

  findAll(): Observable<Users[]> {
    const url = this.baseUrl + "/api/users";
    return this.http.get<Users[]>(url);
  }
}
