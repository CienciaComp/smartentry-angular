import { EmpresasVisitantes } from './../models/cadastro-empresas-visitantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresasVisitantesService {

  baseUrl: String = environment.baseUrl

  constructor(private http : HttpClient,
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<EmpresasVisitantes[]> {
    const url = this.baseUrl + "/api/company";
    return this.http.get<EmpresasVisitantes[]>(url);
  }

  findById(id : any):Observable<EmpresasVisitantes>{
    const url = `${this.baseUrl}/api/company/${id}`;
    return this.http.get<EmpresasVisitantes>(url);
  }

  create(empresaVisitante:  EmpresasVisitantes):Observable<EmpresasVisitantes> {
    const url = this.baseUrl + "/api/company";
    return this.http.post<EmpresasVisitantes>(url, empresaVisitante).pipe(
      tap(() =>{
        this.RequiredRefresh.next();
      })
    );
  }

  update(empresaVisitante: EmpresasVisitantes):Observable<void> {
    const url = `${this.baseUrl}/api/company/${empresaVisitante.id}`
    return this.http.put<void>(url, empresaVisitante)
  }

  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}/api/company/${id}`;
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
