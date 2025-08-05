import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentData } from './parent-data';

describe('ParentData', () => {
  let component: ParentData;
  let fixture: ComponentFixture<ParentData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
