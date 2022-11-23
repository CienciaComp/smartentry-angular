import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Morador } from './../models/morador';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<Morador[]> {
    const url = this.baseUrl + "/api/dweller";
    return this.http.get<Morador[]>(url);
  }

  findById(id : any):Observable<Morador>{
    const url = `${this.baseUrl}/api/dweller/${id}`;
    return this.http.get<Morador>(url);
  }

  create(morador: Morador):Observable<Morador> {
    const url = this.baseUrl + "/api/dweller";
    return this.http.post<Morador>(url, morador).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  update(morador: Morador):Observable<void> {
    const url = `${this.baseUrl}/api/dweller/${morador.id}`
    return this.http.put<void>(url, morador)
  }

  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}/api/dweller/${id}`;
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
