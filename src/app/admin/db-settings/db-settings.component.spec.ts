import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBSettingsComponent } from './db-settings.component';

describe('DBSettingsComponent', () => {
  let component: DBSettingsComponent;
  let fixture: ComponentFixture<DBSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DBSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
