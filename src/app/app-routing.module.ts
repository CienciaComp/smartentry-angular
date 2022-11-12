import { CarrosEmpresasReadComponent } from './views/components/cadastros/carros-empresas-read/carros-empresas-read.component';
import { CorrespondenciasReadComponent } from './views/components/cadastros/correspondencias-read/correspondencias-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrespondenciasUpdateComponent } from './views/components/cadastros/correspondencias-update/correspondencias-update.component';



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
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
