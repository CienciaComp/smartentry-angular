import { environment } from './../../environments/environment';
import { PlacaMorador } from './../models/placa-morador';
import { Subject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacaMoradorService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<PlacaMorador[]> {
    return this.http.get<PlacaMorador[]>("/api/car");
  }

  findById(id : any):Observable<PlacaMorador>{
    const url = `${this.API}/car/${id}`;
    return this.http.get<PlacaMorador>(url);
  }
}
