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
  
  displayedColumns: string[] = ['id', 'visitorCompany', 'nome', 'ecar'];
  dataSource = new MatTableDataSource<CarrosEmpresas>(this.carrosEmpresas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(
    private service : CarrosEmpresasService,
    private empresasService : EmpresasVisitantesService
    ) {}

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.carrosEmpresas = resposta;
      this.listarEmpresas();
      this.dataSource = new MatTableDataSource<CarrosEmpresas>(this.carrosEmpresas);
      this.dataSource.paginator = this.paginator;
      console.log(this.carrosEmpresas);    
    })   
  }

  listarEmpresas() : void {
    this.carrosEmpresas.forEach(x => {
      this.empresasService.findById(x.visitorCompany).subscribe(resposta => {
        x.visitorCompany = resposta.nome_empresa
      })
    })
  }

}

