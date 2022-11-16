import { MoradorService } from 'src/app/services/morador.service';
import { ResidenceService } from './../../../../services/residence.service';
import { PlacaMoradorService } from './../../../../services/placa-morador.service';
import { ContatoMoradorService } from './../../../../services/contato-morador.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Morador } from 'src/app/models/morador';
import { PlacaMorador } from './../../../../models/placa-morador';
import { ContatoMorador } from './../../../../models/contato-morador';
import { Residence } from './../../../../models/residence';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morador-create',
  templateUrl: './morador-create.component.html',
  styleUrls: ['./morador-create.component.css']
})
export class MoradorCreateComponent implements OnInit {

  residences: Residence[] = [];
  contatoMorador: ContatoMorador[] = [];
  placaMorador: PlacaMorador[] = [];

  morador: Morador = {
    id: '',
    nome: '',
    cpf: '',
    rg: '',
    status: '',
    residence: '',
    contactDweller: '',
    car: ''
  }

  moradorForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder,
    private contatoService : ContatoMoradorService,
    private placaSerivce : PlacaMoradorService,
    private router : Router,
    private residenceService : ResidenceService,
    private service : MoradorService) { }

  ngOnInit(): void {
    this.moradorForm = this.FormBuilder.group ({
      nome : ['', Validators.required],
      cpf : ['', Validators.required],
      rg : ['', Validators.required],
      status : ['', Validators.required],
      residence : ['', Validators.required],
      contactDweller : ['', Validators.required],
      car : ['', Validators.required]
    })
    this.listarContatoMorador();
    this.listarPlacaMorador();
    this.listarResidence();
  }

  cancel():void {
    this.router.navigate(['smartentry/dweller'])
  }

  listarResidence(): void {
    this.residenceService.findAll().subscribe(resposta => {
      this.residences = resposta;
    })
  }

  listarContatoMorador(): void {
    this.contatoService.findAll().subscribe(resposta => {
      this.contatoMorador = resposta;
    })
  }

  listarPlacaMorador(): void {
    this.placaSerivce.findAll().subscribe(resposta => {
      this.placaMorador = resposta;
    })
  }

  create() {
    this.service.create(this.morador).subscribe((resposta) => {
    this.router.navigate(['smartentry/dweller'])
    this.service.message('Morador adicionado com Sucesso!')
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
