import { CarrosEmpresasService } from './../../../../services/carros-empresas.service';
import { EmpresasVisitantesService } from './../../../../services/empresas-visitantes.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresasVisitantes } from './../../../../models/cadastro-empresas-visitantes';
import { CarrosEmpresas } from './../../../../models/cadastro-carros-empresas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-empresas-create',
  templateUrl: './carros-empresas-create.component.html',
  styleUrls: ['./carros-empresas-create.component.css']
})
export class CarrosEmpresasCreateComponent implements OnInit {

  carrosEmpresas: CarrosEmpresas[] = [];

  empresasVisitantes: EmpresasVisitantes = {
    id: '',
    nome_empresa: '',
    funcionario: '',
    carCompany: ''
  }

  empresasVisitantesForm !: FormGroup;
  constructor(
    private FormBuilder : FormBuilder,
    private router : Router,
    private service : EmpresasVisitantesService,
    private carrosEmpresasService : CarrosEmpresasService) { }

  ngOnInit(): void {
    this.empresasVisitantesForm = this.FormBuilder.group ({
      nome_empresa : ['', Validators.required],
      funcionario : ['', Validators.required],
      carCompany : ['', Validators.required]
    })
    this.listarPlaca();
  }

  cancel():void {
    this.router.navigate(['smartentry/visitorCompany'])
  }

  listarPlaca(): void{
    this.carrosEmpresasService.findAll().subscribe(resposta => {
      this.carrosEmpresas = resposta;
    })
  }

  create() {
    this.service.create(this.empresasVisitantes).subscribe((resposta) => {
      this.router.navigate(['smartentry/visitorCompany'])
      this.service.message('Empresa visitante adicionada com Sucesso!')
    })
  }
}
