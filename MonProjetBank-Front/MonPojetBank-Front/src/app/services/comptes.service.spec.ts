import { TestBed, inject } from '@angular/core/testing';

import { COmptesService } from './comptes.service';

describe('COmptesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [COmptesService]
    });
  });

  it('should be created', inject([COmptesService], (service: COmptesService) => {
    expect(service).toBeTruthy();
  }));
});
