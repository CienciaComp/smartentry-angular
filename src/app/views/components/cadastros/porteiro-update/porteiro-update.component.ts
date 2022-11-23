import { Router, ActivatedRoute } from '@angular/router';
import { PorteiroService } from './../../../../services/porteiro.service';
import { Porteiro } from './../../../../models/porteiro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porteiro-update',
  templateUrl: './porteiro-update.component.html',
  styleUrls: ['./porteiro-update.component.css']
})
export class PorteiroUpdateComponent implements OnInit {

  id_por = '';

  porteiro: Porteiro = {
    id: '',
    nome: '',
    cpf: '',
    status: '',
    data_admissao: '',
    data_demissao: '',
    turno: ''
  }

  constructor(    
    private service : PorteiroService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.porteiro.id = this.route.snapshot.paramMap.get('id')!
    this.findbyId();
  }

  findbyId():void {
    this.service.findById(this.porteiro.id!).subscribe(resposta => {
      this.porteiro.nome = resposta.nome;
      this.porteiro.cpf = resposta.cpf;
      this.porteiro.status = resposta.status;
      this.porteiro.data_admissao = resposta.data_admissao;
      this.porteiro.data_demissao = resposta.data_demissao;
      this.porteiro.turno = resposta.turno;
    })
  }

  cancel():void {
    this.router.navigate(['smartentry/concierge'])
  }

  update(): void {
    this.service.update(this.porteiro).subscribe(resposta => {
      this.router.navigate(['smartentry/concierge'])
      this.service.message("Porteiro atualizado com Sucesso!")
    }), err => {
      this.service.message("Erro atualizar Porteiro!")
    }
  }

}
