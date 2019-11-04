import { TestBed } from '@angular/core/testing';

import { ListapiService } from './listapi.service';

describe('ListapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListapiService = TestBed.get(ListapiService);
    expect(service).toBeTruthy();
  });
});
