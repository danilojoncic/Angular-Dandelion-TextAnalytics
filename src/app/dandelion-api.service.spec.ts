import { TestBed } from '@angular/core/testing';

import { DandelionApiService } from './dandelion-api.service';

describe('DandelionApiService', () => {
  let service: DandelionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DandelionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
