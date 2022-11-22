import { ContatoMorador } from './../models/contato-morador';
import { Subject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoMoradorService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<ContatoMorador[]> {
    return this.http.get<ContatoMorador[]>("/api/contact");
  }

  findById(id : any):Observable<ContatoMorador>{
    const url = `${this.API}/contact/${id}`;
    return this.http.get<ContatoMorador>(url);
  }
}
