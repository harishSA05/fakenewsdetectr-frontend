import { TestBed } from '@angular/core/testing';

import { Voice2textService } from './voice2text.service';

describe('Voice2textService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Voice2textService = TestBed.get(Voice2textService);
    expect(service).toBeTruthy();
  });
});
