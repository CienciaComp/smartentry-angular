import { CadastroCorrespondenciaComponent } from './cadastros/cadastro-correspondencia/cadastro-correspondencia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: CadastroCorrespondenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
