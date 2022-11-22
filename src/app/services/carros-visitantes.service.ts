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
    return this.http.get<CarrosVisitantes[]>("/api/carvisitant");
  }

  findById(id : any):Observable<CarrosVisitantes>{
    const url = `${this.API}/correspondences/${id}`;
    return this.http.get<CarrosVisitantes>(url);
  }

  create(visitante: CarrosVisitantes):Observable<CarrosVisitantes> {
    return this.http.post<CarrosVisitantes>("/api/carvisitant", visitante).pipe(
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
