import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInmatesComponent } from './update-inmates.component';

describe('UpdateInmatesComponent', () => {
  let component: UpdateInmatesComponent;
  let fixture: ComponentFixture<UpdateInmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateInmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
