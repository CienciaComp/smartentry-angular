
import { PorteiroService } from './../../../../services/porteiro.service';
import { MoradorService } from './../../../../services/morador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CorrespondenciasService } from './../../../../services/correspondencias.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Correspondencia } from './../../../../models/cadastro-correspondencias';
import { Porteiro } from './../../../../models/porteiro';
import { Morador } from './../../../../models/morador';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-correspondencias-update',
  templateUrl: './correspondencias-update.component.html',
  styleUrls: ['./correspondencias-update.component.css']
})
export class CorrespondenciasUpdateComponent implements OnInit {

  id_cor = '';

  moradores: Morador[] = [];

  porteiros: Porteiro[] = [];

  correspondencia: Correspondencia = {
    id: '',
    tipo_correspondencia: '',
    data_recebimento: '',
    status_entrega: '',
    dweller: '',
    conciergeEmployee: ''
  }

  constructor(
    private route : ActivatedRoute, 
    private service : CorrespondenciasService, 
    private router : Router,
    private moradorService : MoradorService,
    private porteiroService : PorteiroService) {}
  
  
  ngOnInit(): void {
    this.correspondencia.id = this.route.snapshot.paramMap.get('id')!
    this.findbyId();
    this.listarMorador();
    this.listarPorteiro();
  }

  findbyId():void {
    this.service.findById(this.correspondencia.id).subscribe(resposta => {
      this.correspondencia = resposta;
    })
  }

  cancel():void {
    this.router.navigate(['smartentry/correspondences'])
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

  update(): void {
    this.service.update(this.correspondencia).subscribe(resposta => {
      this.service.message("Correspondencia atualizada com Sucesso!")
      this.router.navigate(['smartentry/correspondences'])
    })
  }
}
