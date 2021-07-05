import { TestBed } from '@angular/core/testing';

import { LogicWaterfoolService } from './logic-waterfool.service';

describe('LogicWaterfoolService', () => {
  let service: LogicWaterfoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicWaterfoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
