import { TestBed } from '@angular/core/testing';

import { MyTaskAPI } from './my-task-api';

describe('MyTaskAPI', () => {
  let service: MyTaskAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTaskAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
