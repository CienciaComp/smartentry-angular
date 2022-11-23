import { ContatoMoradorService } from 'src/app/services/contato-morador.service';
import { PlacaMoradorService } from './../../../../services/placa-morador.service';
import { ResidenceService } from './../../../../services/residence.service';
import { MoradorService } from 'src/app/services/morador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Morador } from './../../../../models/morador';
import { PlacaMorador } from './../../../../models/placa-morador';
import { ContatoMorador } from './../../../../models/contato-morador';
import { Residence } from './../../../../models/residence';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morador-update',
  templateUrl: './morador-update.component.html',
  styleUrls: ['./morador-update.component.css']
})
export class MoradorUpdateComponent implements OnInit {

  id_mor = '';
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

  constructor(    
    private route : ActivatedRoute, 
    private residenceService : ResidenceService,
    private service : MoradorService,
    private router : Router,
    private placaSerivce : PlacaMoradorService,
    private contatoService : ContatoMoradorService) { }

  ngOnInit(): void {
    this.morador.id = this.route.snapshot.paramMap.get('id')!
    this.findbyId();
    this.listarResidence();
    this.listarContatoMorador();
    this.listarPlacaMorador();
  }

  findbyId():void {
    this.service.findById(this.morador.id!).subscribe(resposta => {
      this.morador.nome = resposta.nome;
      this.morador.cpf = resposta.cpf;
      this.morador.rg = resposta.rg;
      this.morador.status = resposta.status;
      this.morador.residence = resposta.residence;
      this.morador.contactDweller = resposta.contactDweller;
      this.morador.car = resposta.car;
    })
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

  update(): void {
    this.service.update(this.morador).subscribe(resposta => {
      this.router.navigate(['smartentry/dweller'])
      this.service.message("Morador atualizado com Sucesso!")
    }), err => {
      this.service.message("Erro atualizar morador!")
    }
  }

}
