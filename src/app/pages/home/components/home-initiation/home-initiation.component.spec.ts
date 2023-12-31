import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInitiationComponent } from './home-initiation.component';

describe('HomeInitiationComponent', () => {
  let component: HomeInitiationComponent;
  let fixture: ComponentFixture<HomeInitiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInitiationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
