import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesEmpresaPlacaComponent } from './visitantes-empresa-placa.component';

describe('VisitantesEmpresaPlacaComponent', () => {
  let component: VisitantesEmpresaPlacaComponent;
  let fixture: ComponentFixture<VisitantesEmpresaPlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantesEmpresaPlacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantesEmpresaPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
