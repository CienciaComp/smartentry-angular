import { TestBed } from '@angular/core/testing';

import { ContatoMoradorService } from './contato-morador.service';

describe('ContatoMoradorService', () => {
  let service: ContatoMoradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoMoradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
