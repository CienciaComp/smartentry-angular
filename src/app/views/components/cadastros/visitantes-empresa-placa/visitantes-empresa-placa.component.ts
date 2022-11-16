import { CarrosEmpresasService } from './../../../../services/carros-empresas.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarrosEmpresas } from './../../../../models/cadastro-carros-empresas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitantes-empresa-placa',
  templateUrl: './visitantes-empresa-placa.component.html',
  styleUrls: ['./visitantes-empresa-placa.component.css']
})
export class VisitantesEmpresaPlacaComponent implements OnInit {

  carrosEmpresas: CarrosEmpresas = {
    id: '',
    placa: '',
    status: ''
  }

  empresaPlacaForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder,
    private router : Router,
    private service : CarrosEmpresasService) { }

  ngOnInit(): void {
    this.empresaPlacaForm = this.FormBuilder.group ({
      placa : ['', Validators.required],
      status : ['', Validators.required]
    })
  }

  cancel():void {
    this.router.navigate(['smartentry/visitorCompany'])
  }

  create() {
    this.service.create(this.carrosEmpresas).subscribe((resposta) => {
      this.router.navigate(['smartentry/visitorCompany'])
      this.service.message('Placa Empresa visitante adicionada com Sucesso!')
    })
  }

}
