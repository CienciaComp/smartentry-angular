import { Correspondencia } from './../models/cadastro-correspondencias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorrespondenciasService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<Correspondencia[]> {
    const url = this.baseUrl + "/api/correspondences";
    return this.http.get<Correspondencia[]>(url);
  }

  create(correspondencia: Correspondencia):Observable<Correspondencia> {
    const url = this.baseUrl + "/api/correspondences";
    return this.http.post<Correspondencia>(url, correspondencia).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  update(correspondencia: Correspondencia):Observable<void> {
    const url = `${this.baseUrl}/api/correspondences/${correspondencia.id}`
    return this.http.put<void>(url, correspondencia)
  }

  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}/api/correspondences/${id}`;
    return this.http.delete<void>(url);
  }

  findById(id : any):Observable<Correspondencia>{
    const url = `${this.baseUrl}/api/correspondences/${id}`;
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
