import { TestBed } from '@angular/core/testing';

import { MagicCardFetcherService } from './magic-card-fetcher.service';

describe('MagicCardFetcherService', () => {
  let service: MagicCardFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicCardFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
