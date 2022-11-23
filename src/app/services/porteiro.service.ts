import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Porteiro } from './../models/porteiro';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PorteiroService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }
  findAll(): Observable<Porteiro[]> {
    const url = this.baseUrl + "/api/concierge";
    return this.http.get<Porteiro[]>(url);
  }

  findById(id : any):Observable<Porteiro>{
    const url = `${this.baseUrl}/api/concierge/${id}`;
    return this.http.get<Porteiro>(url);
  }

  update(porteiro: Porteiro):Observable<void> {
    const url = `${this.baseUrl}/api/concierge/${porteiro.id}`
    return this.http.put<void>(url, porteiro)
  }

  create(porteiro: Porteiro):Observable<Porteiro> {
    const url = this.baseUrl + "/api/concierge";
    return this.http.post<Porteiro>(url, porteiro).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
  
  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}/api/concierge/${id}`;
    return this.http.delete<void>(url);
  }
}
