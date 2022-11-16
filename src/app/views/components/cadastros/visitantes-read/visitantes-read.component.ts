import { VisitantesCreateComponent } from './../visitantes-create/visitantes-create.component';
import { CarrosVisitantesService } from './../../../../services/carros-visitantes.service';
import { VisitantesService } from './../../../../services/visitantes-service.service';
import { Visitante } from './../../../../models/visitantes';
import { MoradorService } from './../../../../services/morador.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Morador } from './../../../../models/morador';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CarrosVisitantes } from 'src/app/models/carros-visitantes';
import { VisitantePlacaComponent } from '../../../../visitante-placa/visitante-placa.component';

@Component({
  selector: 'app-visitantes-read',
  templateUrl: './visitantes-read.component.html',
  styleUrls: ['./visitantes-read.component.css']
})
export class VisitantesReadComponent implements AfterViewInit {

  visitante: Visitante[] = [];
  morador: Morador[] = [];
  carrosVisitantes: CarrosVisitantes[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'tipo', 'status', 'vcar',  'dweller', 'action'];
  dataSource = new MatTableDataSource<Visitante>(this.visitante);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog : MatDialog,
    private router : Router,
    private moradorService : MoradorService,
    private service : VisitantesService,
    private carrosVisitantesService : CarrosVisitantesService) { }

  ngAfterViewInit() {
    this.findAll();
    this.listarPlaca();
  }

  openDialog() {
    this.dialog.open(VisitantesCreateComponent, {
      width:'30%'
    });
  }

  addPlaca() {
    this.dialog.open(VisitantePlacaComponent, {
      width:'30%'
    });
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.visitante = resposta;
      this.listarMorador();
      this.listarPlaca();
      this.dataSource = new MatTableDataSource<Visitante>(this.visitante);
      this.dataSource.paginator = this.paginator;
      console.log(this.visitante);
    })
    this.service.RequiredRefresh.subscribe(resposta => {
      this.findAll();
    }) 
  }

  listarMorador():void {
    this.visitante.forEach(x => {
      this.moradorService.findById(x.dweller).subscribe(resposta => {
        x.dweller = resposta.nome
      })
    })
  }

  listarPlaca() : void {
    this.visitante.forEach(x => {
      this.carrosVisitantesService.findById(x.vcar).subscribe(resposta => {
        x.vcar = resposta.placa;
      })
    })
  }

  delete(id:number) {
    this.service.delete(id)
    .subscribe({
      next:(res)=>{
        this.service.message('Visitante deletada com Sucesso!')
        this.findAll();
      },
      error:()=>{
        this.service.message('Erro ao deletar a visitante!')
      }
    })
  }

}
