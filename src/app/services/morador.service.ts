import { HttpClient } from '@angular/common/http';
import { Morador } from './../models/morador';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  private readonly API = 'api'

  constructor(private http : HttpClient) { }

  findAll(): Observable<Morador[]> {
    return this.http.get<Morador[]>("/api/dweller");
  }

  findById(id : any):Observable<Morador>{
    const url = `${this.API}/dweller/${id}`;
    return this.http.get<Morador>(url);
  }
}
