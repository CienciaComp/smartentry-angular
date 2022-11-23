import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarrosVisitantes } from './../models/carros-visitantes';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrosVisitantesService {

  baseUrl: String = environment.baseUrl

  private readonly API = 'api'

  constructor(private http : HttpClient,
    private snack: MatSnackBar) { }

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }

  findAll(): Observable<CarrosVisitantes[]> {
    const url = this.baseUrl + "/api/carvisitant";
    return this.http.get<CarrosVisitantes[]>(url);
  }

  findById(id : any):Observable<CarrosVisitantes>{
    const url = `${this.baseUrl}/api/carvisitant/${id}`;
    return this.http.get<CarrosVisitantes>(url);
  }

  create(visitante: CarrosVisitantes):Observable<CarrosVisitantes> {
    const url = this.baseUrl + "/api/carvisitant";
    return this.http.post<CarrosVisitantes>(url, visitante).pipe(
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
