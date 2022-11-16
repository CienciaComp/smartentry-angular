import { MoradorCreateComponent } from './../morador-create/morador-create.component';
import { PlacaMoradorService } from './../../../../services/placa-morador.service';
import { ResidenceService } from './../../../../services/residence.service';
import { Router } from '@angular/router';
import { MoradorService } from 'src/app/services/morador.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Morador } from 'src/app/models/morador';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ContatoMoradorService } from 'src/app/services/contato-morador.service';

@Component({
  selector: 'app-morador-read',
  templateUrl: './morador-read.component.html',
  styleUrls: ['./morador-read.component.css']
})
export class MoradorReadComponent implements AfterViewInit {

  morador: Morador[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'rg', 'status', 'residence', 'contactDweller', 'car', 'action'];
  dataSource = new MatTableDataSource<Morador>(this.morador);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog : MatDialog,
    private moradorService : MoradorService,
    private contatoService : ContatoMoradorService,
    private placaSerivce : PlacaMoradorService,
    private router : Router,
    private residenceService : ResidenceService) { }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.moradorService.findAll().subscribe((resposta) => {
      this.morador = resposta;
      this.listarResidence();
      this.listarContatoMorador();
      this.listarPlacaMorador();
      this.dataSource = new MatTableDataSource<Morador>(this.morador);
      this.dataSource.paginator = this.paginator;
      console.log(this.morador);
    })
    this.moradorService.RequiredRefresh.subscribe(resposta => {
      this.findAll();
    }) 
  }

  openDialog() {
    this.dialog.open(MoradorCreateComponent, {
      width:'30%'
    });
  }


  delete(id:number) {
    this.moradorService.delete(id)
    .subscribe({
      next:(res)=>{
        this.moradorService.message('Morador deletado com Sucesso!')
        this.findAll();
      },
      error:()=>{
        this.moradorService.message('Erro ao deletar Morador!')
      }
    })
  }

  listarResidence(): void {
    this.morador.forEach(x => {
      this.residenceService.findById(x.residence).subscribe(resposta => {
        x.residence = resposta.numero
      })
    })
  }

  listarContatoMorador(): void {
    this.morador.forEach(x => {
      this.contatoService.findById(x.contactDweller).subscribe(resposta => {
        x.contactDweller = resposta.telefone1
      })
    })
  }

  listarPlacaMorador(): void {
    this.morador.forEach(x => {
      this.placaSerivce.findById(x.car).subscribe(resposta => {
        x.car = resposta.placa
      })
    })
  }

}
