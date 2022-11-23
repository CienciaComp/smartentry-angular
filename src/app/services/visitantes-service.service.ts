import { tap } from 'rxjs/operators';
import { Visitante } from './../models/visitantes';
import { Subject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {

  baseUrl: String = environment.baseUrl

  constructor(    
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<Visitante[]> {
    const url = this.baseUrl + "/api/visitants";
    return this.http.get<Visitante[]>(url);
  }

  create(visitante: Visitante):Observable<Visitante> {
    const url = this.baseUrl + "/api/visitants";
    return this.http.post<Visitante>(url, visitante).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  update(visitante: Visitante):Observable<void> {
    const url = `${this.baseUrl}/api/visitants/${visitante.id}`
    return this.http.put<void>(url, visitante)
  }

  findById(id : any):Observable<Visitante>{
    const url = `${this.baseUrl}/api/visitants/${id}`;
    return this.http.get<Visitante>(url);
  }

  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}/api/visitants/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
