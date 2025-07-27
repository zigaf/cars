import {
  Component,
  Input,
  ElementRef,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA, ViewChild
} from '@angular/core';
import Splide from '@splidejs/splide';

import { Swiper} from 'swiper';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-splide-slider',
  templateUrl: './splide-slider.component.html',
  imports: [
    NgForOf,
  ],
  styleUrls: ['./splide-slider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SplideSliderComponent implements  OnInit {
  @Input() slides: any[] = [];
  @Input() type: 'photo' | 'hero' = 'photo';

  splide: any;
  @Input() options!: { height: number; start: number };

  constructor(private el: ElementRef) {}

  ngOnInit() {
  }

  goTo(idx: number) {
    if (this.splide) this.splide.go(idx);
  }

  activeIndex = 0;
  swiperInstance: Swiper | undefined;

  onSwiper(swiper: Swiper) {
    this.swiperInstance = swiper;
  }

  onSlideChange() {
    this.activeIndex = this.swiperInstance?.realIndex || 0;
  }

  goToSlide(index: number) {
    this.swiperInstance?.slideToLoop(index); // slideToLoop учитывает loop:true
    this.activeIndex = index;
  }
}
