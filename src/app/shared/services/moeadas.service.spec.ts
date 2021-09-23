import { TestBed } from '@angular/core/testing';

import { MoeadasService } from './moeadas.service';

describe('MoeadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoeadasService = TestBed.get(MoeadasService);
    expect(service).toBeTruthy();
  });
});
