
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SpaceManagementService } from './space-management.service';

describe('SpaceManagementService', () => {
  let service: SpaceManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SpaceManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
