import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './localstorage.service';

describe('LocalStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  it('should be created', inject([LocalStorageService], (service: LocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
