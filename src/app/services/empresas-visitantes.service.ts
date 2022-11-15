import { EmpresasVisitantes } from './../models/cadastro-empresas-visitantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EmpresasVisitantesService {

  constructor(private http : HttpClient,
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<EmpresasVisitantes[]> {
    return this.http.get<EmpresasVisitantes[]>("/api/company");
  }

  findById(id : any):Observable<EmpresasVisitantes>{
    const url = `${this.API}/company/${id}`;
    return this.http.get<EmpresasVisitantes>(url);
  }

  create(empresaVisitante:  EmpresasVisitantes):Observable<EmpresasVisitantes> {
    return this.http.post<EmpresasVisitantes>("/api/company", empresaVisitante).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  update(empresaVisitante: EmpresasVisitantes):Observable<EmpresasVisitantes> {
    return this.http.put<EmpresasVisitantes>("/api/company", empresaVisitante.id);
  }

  delete(id : any):Observable<void> {
    return this.http.delete<void>("/api/company/" + id);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
