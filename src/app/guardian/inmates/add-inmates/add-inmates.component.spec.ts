import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInmatesComponent } from './add-inmates.component';

describe('AddInmatesComponent', () => {
  let component: AddInmatesComponent;
  let fixture: ComponentFixture<AddInmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
