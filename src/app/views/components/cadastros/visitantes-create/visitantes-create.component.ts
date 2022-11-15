import { CarrosVisitantesService } from './../../../../services/carros-visitantes.service';
import { MoradorService } from './../../../../services/morador.service';
import { Router } from '@angular/router';
import { VisitantesService } from './../../../../services/visitantes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Visitante } from './../../../../models/visitantes';
import { CarrosVisitantes } from './../../../../models/carros-visitantes';
import { Morador } from './../../../../models/morador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitantes-create',
  templateUrl: './visitantes-create.component.html',
  styleUrls: ['./visitantes-create.component.css']
})

export class VisitantesCreateComponent implements OnInit {

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
  private carrosVisitantesService : CarrosVisitantesService) { }

  ngOnInit(): void {
    this.visitanteForm = this.FormBuilder.group ({
      nome : ['', Validators.required],
      cpf : ['', Validators.required],
      tipo : ['', Validators.required],
      status : ['', Validators.required],
      vcar : ['', Validators.required],
      dweller : ['', Validators.required]
    })
    this.listarMorador();
    this.listarPlaca();
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

  create() {
    this.service.create(this.visitante).subscribe((resposta) => {
    this.router.navigate(['smartentry/visitants'])
    this.service.message('Visitante adicionado com Sucesso!')
    })
    /* if(this.correspondenciaForm.valid) {
      this.service.create(this.correspondencia)
      .subscribe({
        next:(res)=> {
          alert("Correspondencia adicionada com Sucesso!");
          this.correspondenciaForm.reset();
          this.dialogRef.close('save');
        },
        error:()=> {
          alert("Erro ao adicionar correspondencia")
        }
      })
    }*/
  }

}
