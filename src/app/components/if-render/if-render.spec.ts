import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRender } from './if-render';

describe('IfRender', () => {
  let component: IfRender;
  let fixture: ComponentFixture<IfRender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfRender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfRender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
