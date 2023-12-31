import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhoAmIComponent } from './home-who-am-i.component';

describe('HomeWhoAmIComponent', () => {
  let component: HomeWhoAmIComponent;
  let fixture: ComponentFixture<HomeWhoAmIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhoAmIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWhoAmIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
