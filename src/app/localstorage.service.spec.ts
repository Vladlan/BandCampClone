import { TestBed, inject } from '@angular/core/testing';

import { LocalStorage } from './localstorage.service';

describe('LocalStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorage]
    });
  });

  it('should be created', inject([LocalStorage], (service: LocalStorage) => {
    expect(service).toBeTruthy();
  }));
});
