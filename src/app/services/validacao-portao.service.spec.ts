import { TestBed } from '@angular/core/testing';

import { ValidacaoPortaoService } from './validacao-portao.service';

describe('ValidacaoPortaoService', () => {
  let service: ValidacaoPortaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacaoPortaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
