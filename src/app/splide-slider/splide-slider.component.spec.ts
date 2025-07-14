import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplideSliderComponent } from './splide-slider.component';

describe('SplideSliderComponent', () => {
  let component: SplideSliderComponent;
  let fixture: ComponentFixture<SplideSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplideSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplideSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
