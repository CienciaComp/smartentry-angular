import { PorteiroReadComponent } from './views/components/cadastros/porteiro-read/porteiro-read.component';
import { MoradorReadComponent } from './views/components/cadastros/morador-read/morador-read.component';

import { VisitantesUpdateComponent } from './views/components/cadastros/visitantes-update/visitantes-update.component';
import { ValidacaoPortaoComponent } from './views/components/validacao-portao/validacao-portao.component';
import { ReclamacoesComponent } from './views/components/reclamacoes/reclamacoes.component';
import { VisitantesReadComponent } from './views/components/cadastros/visitantes-read/visitantes-read.component';
import { CarrosEmpresasUpdateComponent } from './views/components/cadastros/carros-empresas-update/carros-empresas-update.component';
import { CarrosEmpresasReadComponent } from './views/components/cadastros/carros-empresas-read/carros-empresas-read.component';
import { CorrespondenciasReadComponent } from './views/components/cadastros/correspondencias-read/correspondencias-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrespondenciasUpdateComponent } from './views/components/cadastros/correspondencias-update/correspondencias-update.component';
import { LoginComponent } from './views/components/login/login.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { VisitantesCreateComponent } from './views/components/cadastros/visitantes-create/visitantes-create.component';



const routes: Routes = [
  {
    path: 'smartentry/home',
    component: HomeComponent
  },
  {
    path: 'smartentry/correspondences',
    component: CorrespondenciasReadComponent
  },
  {
    path: 'smartentry/correspondences/update/:id',
    component: CorrespondenciasUpdateComponent
  },
  {
    path: 'smartentry/visitorCompany',
    component: CarrosEmpresasReadComponent
  },
  {
    path: 'smartentry/visitorCompany/update/:id',
    component: CarrosEmpresasUpdateComponent
  },
  {
    path: 'smartentry/visitants',
    component: VisitantesReadComponent
  },
  {
    path: 'smartentry/visitants/update/:id',
    component: VisitantesUpdateComponent
  },
  {
    path: 'smartentry/login',
    component: LoginComponent
  },
  {
    path: 'smartentry/complaints',
    component: ReclamacoesComponent
  },
  {
    path: 'smartentry/gatevalidation',
    component: ValidacaoPortaoComponent
  },
  {
    path: 'smartentry/dweller',
    component: MoradorReadComponent
  },
  {
    path: 'smartentry/concierge',
    component: PorteiroReadComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
