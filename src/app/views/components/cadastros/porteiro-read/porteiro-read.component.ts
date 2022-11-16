import { PorteiroCreateComponent } from './../porteiro-create/porteiro-create.component';
import { Router } from '@angular/router';
import { PorteiroService } from './../../../../services/porteiro.service';
import { MatDialog } from '@angular/material/dialog';
import { Porteiro } from './../../../../models/porteiro';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-porteiro-read',
  templateUrl: './porteiro-read.component.html',
  styleUrls: ['./porteiro-read.component.css']
})
export class PorteiroReadComponent implements AfterViewInit {

  porteiro: Porteiro[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'status', 'data_admissao', 'data_demissao', 'turno', 'action'];
  dataSource = new MatTableDataSource<Porteiro>(this.porteiro);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog : MatDialog,
    private service : PorteiroService,
    private router : Router) { }

  ngAfterViewInit() {
    this.findAll();
  }

  openDialog() {
    this.dialog.open(PorteiroCreateComponent, {
      width:'30%'
    });
  }

  delete(id:number) {
    this.service.delete(id)
    .subscribe({
      next:(res)=>{
        this.service.message('Porteiro deletado com Sucesso!')
        this.findAll();
      },
      error:()=>{
        this.service.message('Erro ao deletar Porteiro!')
      }
    })
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.porteiro = resposta;
      this.dataSource = new MatTableDataSource<Porteiro>(this.porteiro);
      this.dataSource.paginator = this.paginator;
      console.log(this.porteiro);
    })
    this.service.RequiredRefresh.subscribe(resposta => {
      this.findAll();
    }) 
  }

}
