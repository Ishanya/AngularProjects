import { TestBed } from '@angular/core/testing';

import { EmpSerService } from './emp-ser.service';

describe('EmpSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpSerService = TestBed.get(EmpSerService);
    expect(service).toBeTruthy();
  });
});
