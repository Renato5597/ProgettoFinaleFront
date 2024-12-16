import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDBComponent } from './search-db.component';

describe('SearchDBComponent', () => {
  let component: SearchDBComponent;
  let fixture: ComponentFixture<SearchDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
