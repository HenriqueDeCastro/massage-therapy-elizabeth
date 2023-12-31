import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWhereIWorkComponent } from './home-where-i-work.component';


describe('HomeWhereIWorkComponent', () => {
  let component: HomeWhereIWorkComponent;
  let fixture: ComponentFixture<HomeWhereIWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhereIWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWhereIWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
