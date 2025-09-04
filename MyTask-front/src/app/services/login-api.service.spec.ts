import { TestBed } from '@angular/core/testing';

import { authApi } from './authApi.service';

describe('LoginAPIService', () => {
  let service: authApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
