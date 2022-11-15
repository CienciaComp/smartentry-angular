import { tap } from 'rxjs/operators';
import { Visitante } from './../models/visitantes';
import { Subject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {

  constructor(    
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<Visitante[]> {
    return this.http.get<Visitante[]>("/api/visitants");
  }

  create(visitante: Visitante):Observable<Visitante> {
    return this.http.post<Visitante>("/api/visitants", visitante).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  delete(id : any):Observable<void> {
    return this.http.delete<void>("/api/visitants/" + id);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
