import { EmpresasVisitantes } from './../models/cadastro-empresas-visitantes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasVisitantesService {

  private readonly API = 'api'

  constructor(private http : HttpClient) { }

  findAll(): Observable<EmpresasVisitantes[]> {
    return this.http.get<EmpresasVisitantes[]>("/api/company");
  }

  findById(id : any):Observable<EmpresasVisitantes>{
    const url = `${this.API}/company/${id}`;
    return this.http.get<EmpresasVisitantes>(url);
  }
}
