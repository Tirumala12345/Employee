import { TestBed } from '@angular/core/testing';

import { AtmloginService } from './atmlogin.service';

describe('AtmloginService', () => {
  let service: AtmloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
