import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardianDetailsComponent } from './add-guardian-details.component';

describe('AddGuardianDetailsComponent', () => {
  let component: AddGuardianDetailsComponent;
  let fixture: ComponentFixture<AddGuardianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGuardianDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGuardianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
