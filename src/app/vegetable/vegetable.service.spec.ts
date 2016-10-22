/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VegetableService } from './vegetable.service';

describe('Service: Vegetable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VegetableService]
    });
  });

  it('should ...', inject([VegetableService], (service: VegetableService) => {
    expect(service).toBeTruthy();
  }));
});
