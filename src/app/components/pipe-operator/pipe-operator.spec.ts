import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOperator } from './pipe-operator';

describe('PipeOperator', () => {
  let component: PipeOperator;
  let fixture: ComponentFixture<PipeOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
