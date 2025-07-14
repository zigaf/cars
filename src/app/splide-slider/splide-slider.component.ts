import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA, ViewChild
} from '@angular/core';
import Splide from '@splidejs/splide';
import {JsonPipe, NgForOf, NgIf, NgStyle} from '@angular/common';

import { Swiper} from 'swiper';

@Component({
  selector: 'app-splide-slider',
  templateUrl: './splide-slider.component.html',
  imports: [
    NgStyle,
    NgIf,
    NgForOf,
    JsonPipe
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
}
