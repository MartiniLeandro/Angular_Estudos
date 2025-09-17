import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaunch } from './update-launch';

describe('UpdateLaunch', () => {
  let component: UpdateLaunch;
  let fixture: ComponentFixture<UpdateLaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLaunch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLaunch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
