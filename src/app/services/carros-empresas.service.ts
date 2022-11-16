import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { CarrosEmpresas } from '../models/cadastro-carros-empresas';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosEmpresasService {

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  constructor(private http : HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<CarrosEmpresas[]> {
    return this.http.get<CarrosEmpresas[]>("/api/carcompany");
  }

  findById(id : any):Observable<CarrosEmpresas>{
    const url = `${this.API}/carcompany/${id}`;
    return this.http.get<CarrosEmpresas>(url);
  }

  create(carroEmpresa:  CarrosEmpresas):Observable<CarrosEmpresas> {
    return this.http.post<CarrosEmpresas>("/api/carcompany", carroEmpresa).pipe(
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
}
