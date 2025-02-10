import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianSideBarComponent } from './guardian-side-bar.component';

describe('GuardianSideBarComponent', () => {
  let component: GuardianSideBarComponent;
  let fixture: ComponentFixture<GuardianSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardianSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
