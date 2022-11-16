import { VisitantesEmpresaPlacaComponent } from './../visitantes-empresa-placa/visitantes-empresa-placa.component';
import { CarrosEmpresasCreateComponent } from './../carros-empresas-create/carros-empresas-create.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpresasVisitantes } from './../../../../models/cadastro-empresas-visitantes';
import { EmpresasVisitantesService } from './../../../../services/empresas-visitantes.service';
import { CarrosEmpresasService } from './../../../../services/carros-empresas.service';
import { CarrosEmpresas } from './../../../../models/cadastro-carros-empresas';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carros-empresas-read',
  templateUrl: './carros-empresas-read.component.html',
  styleUrls: ['./carros-empresas-read.component.css']
})
export class CarrosEmpresasReadComponent implements AfterViewInit {

  carrosEmpresas: CarrosEmpresas[] = [];
  empresasVisitantes: EmpresasVisitantes[] = [];
  
  displayedColumns: string[] = ['id', 'nome_empresa', 'funcionario', 'carCompany', 'action'];
  dataSource = new MatTableDataSource<EmpresasVisitantes>(this.empresasVisitantes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
    this.listarPlaca();
  }

  constructor(
    private dialog : MatDialog,
    private service : CarrosEmpresasService,
    private empresasService : EmpresasVisitantesService) {}

  openDialog() {
    this.dialog.open(CarrosEmpresasCreateComponent, {
      width:'30%'
    });
  }

  addPlaca() {
    this.dialog.open(VisitantesEmpresaPlacaComponent, {
      width:'30%'
    });
  }

  delete(id:number) {
    this.empresasService.delete(id)
    .subscribe({
      next:(res)=>{
        this.empresasService.message('Correspondencia deletada com Sucesso!')
        this.findAll();
      },
      error:()=>{
        this.empresasService.message('Erro ao deletar a correspondencia!')
      }
    })
  }

  findAll(): void {
    this.empresasService.findAll().subscribe((resposta) => {
      this.empresasVisitantes = resposta;
      this.listarPlaca();
      this.dataSource = new MatTableDataSource<EmpresasVisitantes>(this.empresasVisitantes);
      this.dataSource.paginator = this.paginator;
      console.log(this.empresasVisitantes);    
    })
    this.empresasService.RequiredRefresh.subscribe(resposta => {
      this.findAll();
    })    
  }

  listarPlaca() : void {
    this.empresasVisitantes.forEach(x => {
      this.service.findById(x.carCompany).subscribe(resposta => {
        x.carCompany = resposta.placa;
      })
    })
  }
}

