import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSchedulingComponent } from './button-scheduling.component';

describe('ButtonSchedulingComponent', () => {
  let component: ButtonSchedulingComponent;
  let fixture: ComponentFixture<ButtonSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSchedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
