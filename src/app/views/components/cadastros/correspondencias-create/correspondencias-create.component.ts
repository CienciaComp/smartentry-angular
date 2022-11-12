import { Porteiro } from './../../../../models/porteiro';
import { PorteiroService } from './../../../../services/porteiro.service';
import { MoradorService } from 'src/app/services/morador.service';
import { Morador } from './../../../../models/morador';
import { Correspondencia } from './../../../../models/cadastro-correspondencias';
import { CorrespondenciasService } from '../../../../services/correspondencias.service';
import { Component, Inject, OnInit } from '@angular/core';
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
    data_recebimento: '',
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

  create() {
    this.service.create(this.correspondencia).subscribe((resposta) => {
    this.router.navigate(['smartentry/correspondences'])
    this.service.message('Correspondencia adicionada com Sucesso!')
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
