import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyInmatesComponent } from './verify-inmates.component';

describe('VerifyInmatesComponent', () => {
  let component: VerifyInmatesComponent;
  let fixture: ComponentFixture<VerifyInmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyInmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyInmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
