import { CorrespondenciasReadComponent } from './views/components/cadastros/correspondencias-read/correspondencias-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'smartentry/home',
    component: HomeComponent
  },
  {
    path: 'smartentry/correspondences',
    component: CorrespondenciasReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
