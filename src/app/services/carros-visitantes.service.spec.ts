import { TestBed } from '@angular/core/testing';

import { CarrosVisitantesService } from './carros-visitantes.service';

describe('CarrosVisitantesService', () => {
  let service: CarrosVisitantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosVisitantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
