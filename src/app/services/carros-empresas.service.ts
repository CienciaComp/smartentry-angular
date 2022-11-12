import { CarrosEmpresas } from '../models/cadastro-carros-empresas';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosEmpresasService {

  constructor(private http : HttpClient) { }

  findAll(): Observable<CarrosEmpresas[]> {
    return this.http.get<CarrosEmpresas[]>("/api/car");
  }
}
