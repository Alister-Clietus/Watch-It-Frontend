import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmatesMedicalDetailsComponent } from './inmates-medical-details.component';

describe('InmatesMedicalDetailsComponent', () => {
  let component: InmatesMedicalDetailsComponent;
  let fixture: ComponentFixture<InmatesMedicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmatesMedicalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmatesMedicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
