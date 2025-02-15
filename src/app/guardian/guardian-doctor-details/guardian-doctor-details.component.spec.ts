import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianDoctorDetailsComponent } from './guardian-doctor-details.component';

describe('GuardianDoctorDetailsComponent', () => {
  let component: GuardianDoctorDetailsComponent;
  let fixture: ComponentFixture<GuardianDoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardianDoctorDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
