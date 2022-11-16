import { MoradorService } from 'src/app/services/morador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarrosVisitantes } from 'src/app/models/carros-visitantes';
import { Component, OnInit } from '@angular/core';
import { Morador } from 'src/app/models/morador';
import { Visitante } from 'src/app/models/visitantes';
import { VisitantesService } from 'src/app/services/visitantes-service.service';
import { CarrosVisitantesService } from 'src/app/services/carros-visitantes.service';

@Component({
  selector: 'app-visitantes-update',
  templateUrl: './visitantes-update.component.html',
  styleUrls: ['./visitantes-update.component.css']
})
export class VisitantesUpdateComponent implements OnInit {

  morador: Morador[] = [];
  carrosVisitantes: CarrosVisitantes[] = [];

  visitante: Visitante = {
    id: '',
    nome: '',
    cpf: '',
    tipo: '',
    status: '',
    vcar: '',
    dweller: ''

  }

  visitanteForm !: FormGroup;
  constructor(
  private FormBuilder : FormBuilder, 
  private service : VisitantesService, 
  private router : Router,
  private moradorService : MoradorService,
  private carrosVisitantesService : CarrosVisitantesService,
  private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.visitante.id = this.route.snapshot.paramMap.get('id')!
    this.findbyId();
    this.listarMorador();
    this.listarPlaca();
  }

  findbyId():void {
    this.service.findById(this.visitante.id!).subscribe(resposta => {
      this.visitante.nome = resposta.nome;
      this.visitante.cpf = resposta.cpf;
      this.visitante.tipo = resposta.tipo;
      this.visitante.status = resposta.status;
      this.visitante.vcar = resposta.vcar;
      this.visitante.dweller = resposta.dweller;
    })
  }

  cancel():void {
    this.router.navigate(['smartentry/visitants'])
  }

  listarMorador(): void {
    this.moradorService.findAll().subscribe(resposta => {
      this.morador = resposta;
    })
  }

  listarPlaca(): void {
    this.carrosVisitantesService.findAll().subscribe(resposta => {
      this.carrosVisitantes = resposta;
    })
  }

  update(): void {
    this.service.update(this.visitante).subscribe(resposta => {
      this.router.navigate(['smartentry/visitants'])
      this.service.message("Visita atualizada com Sucesso!")
    }), err => {
      this.service.message("Erro atualizar visita!")
    }
  }
}
