import { TestBed } from '@angular/core/testing';

import { PlacaMoradorService } from './placa-morador.service';

describe('PlacaMoradorService', () => {
  let service: PlacaMoradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacaMoradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
