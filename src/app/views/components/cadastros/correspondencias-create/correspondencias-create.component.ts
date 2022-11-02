import { Porteiro } from './../../../../models/porteiro';
import { PorteiroService } from './../../../../services/porteiro.service';
import { MoradorService } from 'src/app/services/morador.service';
import { Morador } from './../../../../models/morador';
import { Correspondencia } from './../../../../models/cadastro-correspondencias';
import { CorrespondenciasService } from '../../../../services/correspondencias.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correspondencias-create',
  templateUrl: './correspondencias-create.component.html',
  styleUrls: ['./correspondencias-create.component.css']
})
export class CorrespondenciasCreateComponent implements OnInit {

  moradores: Morador[] = [];

  porteiros: Porteiro[] = [];

  correspondencia: Correspondencia = {
    id: '',
    tipo_correspondencia: '',
    data_recebimento: new Date(''),
    status_entrega: '',
    dweller: '',
    conciergeEmployee: ''
  }

  correspondenciaForm !: FormGroup;
  constructor(
    private FormBuilder : FormBuilder, 
    private service : CorrespondenciasService, 
    private router : Router,
    private moradorService : MoradorService,
    private porteiroService : PorteiroService) {}
  
  ngOnInit(): void {
    this.correspondenciaForm = this.FormBuilder.group ({
      tipo : ['', Validators.required],
      status : ['', Validators.required],
      date : ['', Validators.required],
      dweller : ['', Validators.required],
      conciergeEmployee : ['', Validators.required]
    })
    this.listarMorador();
    this.listarPorteiro();
  }

  cancel():void {
    this.router.navigate(['correspondencias'])
  }

  listarMorador(): void {
    this.moradorService.findAll().subscribe(resposta => {
      this.moradores = resposta;
    })
  }

  listarPorteiro(): void {
    this.porteiroService.findAll().subscribe(resposta => {
      this.porteiros = resposta;
    })
  }

  create():void {
    this.service.create(this.correspondencia).subscribe((resposta) => {
      this.router.navigate(['correspondencias'])
      this.service.message('Correspondencia adicionada com Sucesso!')
    })
  }
}
