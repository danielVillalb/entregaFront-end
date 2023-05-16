import { TestBed } from '@angular/core/testing';

import { SPersonaService } from './spersona.service';

describe('SPersonaService', () => {
  let service: SPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
