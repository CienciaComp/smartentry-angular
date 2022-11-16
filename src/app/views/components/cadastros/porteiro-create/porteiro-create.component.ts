import { PorteiroService } from './../../../../services/porteiro.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Porteiro } from './../../../../models/porteiro';
import { Morador } from 'src/app/models/morador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porteiro-create',
  templateUrl: './porteiro-create.component.html',
  styleUrls: ['./porteiro-create.component.css']
})
export class PorteiroCreateComponent implements OnInit {

  porteiro: Porteiro = {
    id: '',
    nome: '',
    cpf: '',
    status: '',
    data_admissao: '',
    data_demissao: '',
    turno: ''
  }

  porteiroForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder,
    private service : PorteiroService,
    private router : Router) { }

  ngOnInit(): void {
    this.porteiroForm = this.FormBuilder.group ({
      nome : ['', Validators.required],
      cpf : ['', Validators.required],
      status : ['', Validators.required],
      data_admissao : ['', Validators.required],
      turno : ['', Validators.required]
    })
  }

  cancel():void {
    this.router.navigate(['smartentry/concierge'])
  }

  create() {
    this.service.create(this.porteiro).subscribe((resposta) => {
    this.router.navigate(['smartentry/concierge'])
    this.service.message('Porteiro adicionado com Sucesso!')
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
