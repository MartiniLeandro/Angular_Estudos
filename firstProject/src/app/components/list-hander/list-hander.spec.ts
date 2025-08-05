import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHander } from './list-hander';

describe('ListHander', () => {
  let component: ListHander;
  let fixture: ComponentFixture<ListHander>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHander]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHander);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
