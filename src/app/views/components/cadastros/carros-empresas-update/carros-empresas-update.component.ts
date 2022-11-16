import { CarrosEmpresasService } from './../../../../services/carros-empresas.service';
import { EmpresasVisitantesService } from './../../../../services/empresas-visitantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasVisitantes } from './../../../../models/cadastro-empresas-visitantes';
import { CarrosEmpresas } from './../../../../models/cadastro-carros-empresas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-empresas-update',
  templateUrl: './carros-empresas-update.component.html',
  styleUrls: ['./carros-empresas-update.component.css']
})
export class CarrosEmpresasUpdateComponent implements OnInit {

  carrosEmpresas: CarrosEmpresas[] = [];

  empresasVisitantes: EmpresasVisitantes = {
    id: '',
    nome_empresa: '',
    funcionario: '',
    carCompany: ''
  }

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service : EmpresasVisitantesService,
    private carrosEmpresasService : CarrosEmpresasService) { }

  ngOnInit(): void {
    this.empresasVisitantes.id = this.route.snapshot.paramMap.get('id')!
    this.findbyId();
    this.listarPlaca();
  }

  cancel():void {
    this.router.navigate(['smartentry/visitorCompany'])
  }

  findbyId():void {
    this.service.findById(this.empresasVisitantes.id!).subscribe(resposta => {
      this.empresasVisitantes.nome_empresa = resposta.nome_empresa;
      this.empresasVisitantes.funcionario = resposta.funcionario;
      this.empresasVisitantes.carCompany = resposta.carCompany;
    })
  }

  listarPlaca(): void{
    this.carrosEmpresasService.findAll().subscribe(resposta => {
      this.carrosEmpresas = resposta;
    })
  }

  update(): void {
    this.service.update(this.empresasVisitantes).subscribe(resposta => {
      this.router.navigate(['smartentry/visitorCompany'])
      this.service.message("Empresa Visitante Atualizada com Sucesso!")
    }), err => {
      this.service.message("Erro atualizar Empresa Visitante!")
    }
  }

}
