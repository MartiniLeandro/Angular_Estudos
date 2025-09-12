import { TestBed } from '@angular/core/testing';

import { AuthAPI } from './auth-api';

describe('AuthAPI', () => {
  let service: AuthAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
