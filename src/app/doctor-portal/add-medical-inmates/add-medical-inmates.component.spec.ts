import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalInmatesComponent } from './add-medical-inmates.component';

describe('AddMedicalInmatesComponent', () => {
  let component: AddMedicalInmatesComponent;
  let fixture: ComponentFixture<AddMedicalInmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMedicalInmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicalInmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
