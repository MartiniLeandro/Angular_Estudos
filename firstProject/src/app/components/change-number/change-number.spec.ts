import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumber } from './change-number';

describe('ChangeNumber', () => {
  let component: ChangeNumber;
  let fixture: ComponentFixture<ChangeNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeNumber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
