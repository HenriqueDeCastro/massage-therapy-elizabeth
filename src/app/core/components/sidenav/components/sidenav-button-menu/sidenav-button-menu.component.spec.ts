import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavButtonMenuComponent } from './sidenav-button-menu.component';

describe('SidenavButtonMenuComponent', () => {
  let component: SidenavButtonMenuComponent;
  let fixture: ComponentFixture<SidenavButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavButtonMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
