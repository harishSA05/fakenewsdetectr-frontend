import { TestBed } from '@angular/core/testing';

import { Image2textService } from './image2text.service';

describe('Image2textService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Image2textService = TestBed.get(Image2textService);
    expect(service).toBeTruthy();
  });
});
