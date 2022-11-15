import { TestBed } from '@angular/core/testing';

import { VisitantesServiceService } from './visitantes-service.service';

describe('VisitantesServiceService', () => {
  let service: VisitantesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitantesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
