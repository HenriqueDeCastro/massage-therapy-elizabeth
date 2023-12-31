import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProceduresComponent } from './home-procedures.component';

describe('HomeProceduresComponent', () => {
  let component: HomeProceduresComponent;
  let fixture: ComponentFixture<HomeProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProceduresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
