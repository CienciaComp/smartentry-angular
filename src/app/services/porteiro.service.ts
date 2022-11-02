import { Porteiro } from './../models/porteiro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorteiroService {

  private readonly API = 'api'

  constructor(private http : HttpClient) { }

  findAll(): Observable<Porteiro[]> {
    return this.http.get<Porteiro[]>("/api/concierge");
  }

  findById(id : any):Observable<Porteiro>{
    const url = `${this.API}/concierge/${id}`;
    return this.http.get<Porteiro>(url);
  }
}
