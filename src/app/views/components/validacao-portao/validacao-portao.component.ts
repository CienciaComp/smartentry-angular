import { ValidacaoPortaoService } from './../../../services/validacao-portao.service';
import { ValidacaoPortao } from './../../../models/validacao-portao';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-validacao-portao',
  templateUrl: './validacao-portao.component.html',
  styleUrls: ['./validacao-portao.component.css']
})
export class ValidacaoPortaoComponent implements AfterViewInit {

  validacaoPortao: ValidacaoPortao[] = [];

  displayedColumns: string[] = ['id', 'placa_morador', 'placa_visitante', 'placa_empresa', 'data', 'hora', 'liberacao'];
  dataSource = new MatTableDataSource<ValidacaoPortao>(this.validacaoPortao);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor( 
    private service : ValidacaoPortaoService) { }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.validacaoPortao = resposta;
      this.dataSource = new MatTableDataSource<ValidacaoPortao>(this.validacaoPortao);
      this.dataSource.paginator = this.paginator;
      console.log(this.validacaoPortao);
    })
    this.service.RequiredRefresh.subscribe(resposta => {
      this.findAll();
    }) 
  }

}
