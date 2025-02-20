import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSidebarComponent } from './signup-sidebar.component';

describe('SignupSidebarComponent', () => {
  let component: SignupSidebarComponent;
  let fixture: ComponentFixture<SignupSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
