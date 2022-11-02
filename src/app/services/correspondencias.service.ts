import { Correspondencia } from './../models/cadastro-correspondencias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CorrespondenciasService {

  constructor(
    private http : HttpClient, 
    private snack: MatSnackBar) { }

  findAll(): Observable<Correspondencia[]> {
    return this.http.get<Correspondencia[]>("/api/correspondences");
  }

  create(correspondencia: Correspondencia):Observable<Correspondencia> {
    return this.http.post<Correspondencia>("/api/correspondences", correspondencia);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
