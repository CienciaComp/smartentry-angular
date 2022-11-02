import { TestBed } from '@angular/core/testing';

import { PorteiroService } from './porteiro.service';

describe('PorteiroService', () => {
  let service: PorteiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorteiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
