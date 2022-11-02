import { TestBed } from '@angular/core/testing';

import { CorrespondenciasService } from './correspondencias.service';

describe('CadastrosService', () => {
  let service: CorrespondenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrespondenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
