import { Router } from '@angular/router';
import { Porteiro } from './../../../../models/porteiro';
import { PorteiroService } from './../../../../services/porteiro.service';
import { Morador } from './../../../../models/morador';
import { CorrespondenciasCreateComponent } from './../correspondencias-create/correspondencias-create.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Correspondencia } from 'src/app/models/cadastro-correspondencias';
import { CorrespondenciasService } from 'src/app/services/correspondencias.service';
import { MoradorService } from 'src/app/services/morador.service';
import { CorrespondenciasUpdateComponent } from '../correspondencias-update/correspondencias-update.component';

@Component({
  selector: 'app-correspondencias-read',
  templateUrl: './correspondencias-read.component.html',
  styleUrls: ['./correspondencias-read.component.css']
})
export class CorrespondenciasReadComponent implements AfterViewInit {

  correspondencias: Correspondencia[] = [];
  morador: Morador[] = [];
  porteiro: Porteiro[] = [];

  displayedColumns: string[] = ['id', 'tipo_correspondencia', 'data_recebimento', 'status_entrega', 'dweller', 'conciergeEmployee', 'action'];
  dataSource = new MatTableDataSource<Correspondencia>(this.correspondencias);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(
    private dialog : MatDialog, 
    private api : CorrespondenciasService, 
    private service : CorrespondenciasService, 
    private moradorService : MoradorService,
    private porteiroService : PorteiroService,
    private router : Router) { }

  openDialog() {
    this.dialog.open(CorrespondenciasCreateComponent, {
      width:'30%'
    });
  }

  update() {
    this.dialog.open(CorrespondenciasUpdateComponent, {
      width:'30%'
    });
  }

  delete(id:number) {
    this.service.delete(id)
    .subscribe({
      next:(res)=>{
        this.service.message('Correspondencia deletada com Sucesso!')
        this.findAll();
      },
      error:()=>{
        this.service.message('Erro ao deletar a correspondencia!')
      }
    })
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.correspondencias = resposta;
      this.listarMorador();
      this.listaPorteiro();
      this.dataSource = new MatTableDataSource<Correspondencia>(this.correspondencias);
      this.dataSource.paginator = this.paginator;
      console.log(this.correspondencias);
    })
    this.service.RequiredRefresh.subscribe(resposta => {
      this.findAll();
    }) 
  }

  navigateToCreate(): void{
    this.router.navigate(['smartentry/correspondences'])
  }

  listarMorador():void {
    this.correspondencias.forEach(x => {
      this.moradorService.findById(x.dweller).subscribe(resposta => {
        x.dweller = resposta.nome
      })
    })
  }

  listaPorteiro(): void {
    this.correspondencias.forEach(x => {
      this.porteiroService.findById(x.conciergeEmployee).subscribe(resposta => {
        x.conciergeEmployee = resposta.nome
      })
    })
  }

}