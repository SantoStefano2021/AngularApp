import { TestBed } from '@angular/core/testing';

import { LogoutWaterfoolService } from './logout-waterfool.service';

describe('LogoutWaterfoolService', () => {
  let service: LogoutWaterfoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutWaterfoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
