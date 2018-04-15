import { TestBed, inject } from '@angular/core/testing';

import { ApiBackGameService } from './api-back-game.service';

describe('ApiBackGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBackGameService]
    });
  });

  it('should be created', inject([ApiBackGameService], (service: ApiBackGameService) => {
    expect(service).toBeTruthy();
  }));
});
