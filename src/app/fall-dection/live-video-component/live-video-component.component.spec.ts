import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveVideoComponentComponent } from './live-video-component.component';

describe('LiveVideoComponentComponent', () => {
  let component: LiveVideoComponentComponent;
  let fixture: ComponentFixture<LiveVideoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveVideoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
