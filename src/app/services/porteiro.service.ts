import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Porteiro } from './../models/porteiro';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorteiroService {

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }
  findAll(): Observable<Porteiro[]> {
    return this.http.get<Porteiro[]>("/api/concierge");
  }

  findById(id : any):Observable<Porteiro>{
    const url = `${this.API}/concierge/${id}`;
    return this.http.get<Porteiro>(url);
  }

  create(porteiro: Porteiro):Observable<Porteiro> {
    return this.http.post<Porteiro>("/api/concierge", porteiro).pipe(
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
    return this.http.delete<void>("/api/concierge/" + id);
  }
}
