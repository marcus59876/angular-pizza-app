import { TestBed, inject } from '@angular/core/testing';

import { CrustService } from './crust.service';

describe('CrustService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrustService]
    });
  });

  it('should be created', inject([CrustService], (service: CrustService) => {
    expect(service).toBeTruthy();
  }));
});
