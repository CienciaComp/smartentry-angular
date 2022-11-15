import { CarrosVisitantes } from './../models/carros-visitantes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosVisitantesService {

  private readonly API = 'api'

  constructor(private http : HttpClient) { }

  findAll(): Observable<CarrosVisitantes[]> {
    return this.http.get<CarrosVisitantes[]>("/api/carvisitant");
  }

  findById(id : any):Observable<CarrosVisitantes>{
    const url = `${this.API}/carvisitant/${id}`;
    return this.http.get<CarrosVisitantes>(url);
  }
}
