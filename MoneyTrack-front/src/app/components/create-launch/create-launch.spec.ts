import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaunch } from './create-launch';

describe('CreateLaunch', () => {
  let component: CreateLaunch;
  let fixture: ComponentFixture<CreateLaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLaunch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLaunch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
