import { Residence } from './../models/residence';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  private readonly API = 'api'

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<Residence[]> {
    return this.http.get<Residence[]>("/api/residence");
  }

  findById(id : any):Observable<Residence>{
    const url = `${this.API}/residence/${id}`;
    return this.http.get<Residence>(url);
  }
}
