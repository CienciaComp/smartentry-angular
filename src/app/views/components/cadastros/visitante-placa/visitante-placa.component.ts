import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarrosVisitantes } from 'src/app/models/carros-visitantes';
import { Component, OnInit } from '@angular/core';
import { CarrosVisitantesService } from 'src/app/services/carros-visitantes.service';

@Component({
  selector: 'app-visitante-placa',
  templateUrl: './visitante-placa.component.html',
  styleUrls: ['./visitante-placa.component.css']
})
export class VisitantePlacaComponent implements OnInit {

  carrosVisitantes: CarrosVisitantes = {
    id: '',
    placa: '',
    status: ''
  }

  placaForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder,
    private router : Router,
    private carrosVisitantesService : CarrosVisitantesService) { }

  ngOnInit(): void {
    this.placaForm = this.FormBuilder.group ({
      placa : ['', Validators.required],
      status : ['', Validators.required]
    })
  }

  cancel():void {
    this.router.navigate(['smartentry/visitants'])
  }

  create() {
    this.carrosVisitantesService.create(this.carrosVisitantes).subscribe((resposta) => {
    this.router.navigate(['smartentry/visitants'])
    this.carrosVisitantesService.message('Placa adicionado com Sucesso!')
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
