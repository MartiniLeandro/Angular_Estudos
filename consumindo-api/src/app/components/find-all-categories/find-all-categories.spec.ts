import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllCategories } from './find-all-categories';

describe('FindAllCategories', () => {
  let component: FindAllCategories;
  let fixture: ComponentFixture<FindAllCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAllCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
