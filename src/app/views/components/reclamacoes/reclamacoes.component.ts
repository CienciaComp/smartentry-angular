import { UsersService } from './../../../services/users.service';
import { Users } from './../../../models/users';
import { ReclamacoesService } from './../../../services/reclamacoes.service';
import { Reclamacoes } from './../../../models/reclamacoes';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reclamacoes',
  templateUrl: './reclamacoes.component.html',
  styleUrls: ['./reclamacoes.component.css']
})
export class ReclamacoesComponent implements AfterViewInit {

  reclamacoes: Reclamacoes[] = [];
  users: Users[] = [];

  displayedColumns: string[] = ['id', 'data', 'user', 'reclamacao'];
  dataSource = new MatTableDataSource<Reclamacoes>(this.reclamacoes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  constructor(
    private service : ReclamacoesService,
    private usersService : UsersService) { }


  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.reclamacoes = resposta;
      this.listaUser();
      this.dataSource = new MatTableDataSource<Reclamacoes>(this.reclamacoes);
      this.dataSource.paginator = this.paginator;
      console.log(this.reclamacoes);
    })
    this.service.RequiredRefresh.subscribe(resposta => {
      this.findAll();
    }) 
  }

  listaUser() {
    this.reclamacoes.forEach(x => {
      this.usersService.findById(x.user).subscribe(resposta => {
        x.user = resposta.nomeUsuario
      })
    })
  }

}
