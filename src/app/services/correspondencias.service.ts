import { Correspondencia } from './../models/cadastro-correspondencias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CorrespondenciasService {

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<Correspondencia[]> {
    return this.http.get<Correspondencia[]>("/api/correspondences");
  }

  create(correspondencia: Correspondencia):Observable<Correspondencia> {
    return this.http.post<Correspondencia>("/api/correspondences", correspondencia).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  update(correspondencia: Correspondencia):Observable<Correspondencia> {
    return this.http.put<Correspondencia>("/api/correspondences", correspondencia.id);
  }

  delete(id : any):Observable<void> {
    return this.http.delete<void>("/api/correspondences/" + id);
  }

  findById(id : any):Observable<Correspondencia>{
    const url = `${this.API}/correspondences/${id}`;
    return this.http.get<Correspondencia>(url);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
