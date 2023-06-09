import { TestBed } from '@angular/core/testing';

import { ClientessService } from './clientess.service';

describe('ClientessService', () => {
  let service: ClientessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
