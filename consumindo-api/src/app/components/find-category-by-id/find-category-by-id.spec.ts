import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCategoryById } from './find-category-by-id';

describe('FindCategoryById', () => {
  let component: FindCategoryById;
  let fixture: ComponentFixture<FindCategoryById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindCategoryById]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindCategoryById);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
