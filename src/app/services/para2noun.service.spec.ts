import { TestBed } from '@angular/core/testing';

import { Para2nounService } from './para2noun.service';

describe('Para2nounService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Para2nounService = TestBed.get(Para2nounService);
    expect(service).toBeTruthy();
  });
});
