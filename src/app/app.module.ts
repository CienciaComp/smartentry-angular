import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/components/home/home.component';
import { CorrespondenciasReadComponent } from './views/components/cadastros/correspondencias-read/correspondencias-read.component';
import { CorrespondenciasCreateComponent } from './views/components/cadastros/correspondencias-create/correspondencias-create.component';
import { CarrosEmpresasReadComponent } from './views/components/cadastros/carros-empresas-read/carros-empresas-read.component';
import { CorrespondenciasUpdateComponent } from './views/components/cadastros/correspondencias-update/correspondencias-update.component';
import { CarrosEmpresasCreateComponent } from './views/components/cadastros/carros-empresas-create/carros-empresas-create.component';
import { CarrosEmpresasUpdateComponent } from './views/components/cadastros/carros-empresas-update/carros-empresas-update.component';
import { VisitantesReadComponent } from './views/components/cadastros/visitantes-read/visitantes-read.component';
import { VisitantesCreateComponent } from './views/components/cadastros/visitantes-create/visitantes-create.component';
import { LoginComponent } from './views/components/login/login.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { ReclamacoesComponent } from './views/components/reclamacoes/reclamacoes.component';
import { ValidacaoPortaoComponent } from './views/components/validacao-portao/validacao-portao.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { SidnavComponent } from './views/components/template/sidnav/sidnav.component';
import {MatCardModule} from '@angular/material/card';
import { VisitantesUpdateComponent } from './views/components/cadastros/visitantes-update/visitantes-update.component';
import { VisitantePlacaComponent } from './visitante-placa/visitante-placa.component';
import { VisitantesEmpresaPlacaComponent } from './views/components/cadastros/visitantes-empresa-placa/visitantes-empresa-placa.component';
import { MoradorReadComponent } from './views/components/cadastros/morador-read/morador-read.component';
import { PorteiroReadComponent } from './views/components/cadastros/porteiro-read/porteiro-read.component';
import { MoradorCreateComponent } from './views/components/cadastros/morador-create/morador-create.component';
import { PorteiroCreateComponent } from './views/components/cadastros/porteiro-create/porteiro-create.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorrespondenciasReadComponent,
    CorrespondenciasCreateComponent,
    CarrosEmpresasReadComponent,
    CorrespondenciasUpdateComponent,
    CarrosEmpresasCreateComponent,
    CarrosEmpresasUpdateComponent,
    VisitantesReadComponent,
    VisitantesCreateComponent,
    LoginComponent,
    HeaderComponent,
    ReclamacoesComponent,
    ValidacaoPortaoComponent,
    FooterComponent,
    SidnavComponent,
    VisitantesUpdateComponent,
    VisitantePlacaComponent,
    VisitantesEmpresaPlacaComponent,
    MoradorReadComponent,
    PorteiroReadComponent,
    MoradorCreateComponent,
    PorteiroCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
