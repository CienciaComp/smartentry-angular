import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cadastro-correspondencia',
  templateUrl: './cadastro-correspondencia.component.html',
  styleUrls: ['./cadastro-correspondencia.component.css']
})
export class CadastroCorrespondenciaComponent implements OnInit {

  displayedColumns: string[] = ['tipoCorrespondencia', 'data', 'status'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
  }

  constructor(private dialog : MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
