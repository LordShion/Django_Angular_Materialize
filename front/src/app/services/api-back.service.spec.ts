import { TestBed, inject } from '@angular/core/testing';

import { ApiBackService } from './api-back.service';

describe('ApiBackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBackService]
    });
  });

  it('should be created', inject([ApiBackService], (service: ApiBackService) => {
    expect(service).toBeTruthy();
  }));
});
