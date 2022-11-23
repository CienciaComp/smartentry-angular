import { Reclamacoes } from './../models/reclamacoes';
import { Subject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamacoesService {

  baseUrl: String = environment.baseUrl
  
  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<Reclamacoes[]> {
    const url = this.baseUrl + "/api/complaints";
    return this.http.get<Reclamacoes[]>(url);
  }
}
