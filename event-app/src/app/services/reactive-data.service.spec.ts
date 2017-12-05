import { TestBed, inject } from '@angular/core/testing';

import { ReactiveDataService } from './reactive-data.service';

describe('ReactiveDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiveDataService]
    });
  });

  it('should be created', inject([ReactiveDataService], (service: ReactiveDataService) => {
    expect(service).toBeTruthy();
  }));
});
