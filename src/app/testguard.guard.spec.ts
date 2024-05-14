import { TestBed } from '@angular/core/testing';

import { TestguardGuard } from './testguard.guard';

describe('TestguardGuard', () => {
  let guard: TestguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
