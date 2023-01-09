import { TestBed } from '@angular/core/testing';

import { UpdateDebtStatusService } from './update-debt-status.service';

describe('UpdateDebtStatusService', () => {
  let service: UpdateDebtStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDebtStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
