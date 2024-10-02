import { TestBed } from '@angular/core/testing';

import { MyAngularLibService } from './my-angular-lib.service';

describe('MyAngularLibService', () => {
  let service: MyAngularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAngularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
