import { TestBed } from '@angular/core/testing';

import { MealretriverService } from './mealretriver.service';

describe('MealretriverService', () => {
  let service: MealretriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealretriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
