import { TestBed } from '@angular/core/testing';

import { EmpresasVisitantesService } from './carros-empresas.service';

describe('EmpresasVisitantesService', () => {
  let service: EmpresasVisitantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresasVisitantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
