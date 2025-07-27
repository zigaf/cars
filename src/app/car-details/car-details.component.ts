import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoilerPartsService } from '../services/boiler-parts.service';
import {SplideSliderComponent} from '../splide-slider/splide-slider.component';
import {DecimalPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  imports: [
    SplideSliderComponent,
    DecimalPipe,
  ],
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: any;
  images: string[] = [];
  selectedImageIdx = 0;

  @ViewChild(SplideSliderComponent) splideCmp!: SplideSliderComponent;


  constructor(
    private route: ActivatedRoute,
    private boilerPartsService: BoilerPartsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.boilerPartsService.getCarById(id!).subscribe((car) => {
      this.car = car;
      this.images = this.getImages(car.images);
    });
  }

  recommendedCars = [
    { img: '...', brand: 'Mazda', model: 'CX-5', year: 2024, price: 9400 },
    // ...
  ];

  selectImage(idx: number) {
    this.selectedImageIdx = idx;
    setTimeout(() => this.splideCmp?.goTo(idx), 0);
  }

  orderModalOpen = false;
  calcModalOpen = false;
  vinModalOpen = false;

  openOrderModal() { this.orderModalOpen = true; }
  openCalcModal() { this.calcModalOpen = true; }
  openVinModal() { this.vinModalOpen = true; }
  openFavModal(e: Event) { e.preventDefault(); /* добавить в избранное */ }
  openQuestionModal(e: Event) { e.preventDefault(); /* открыть форму */ }

  getImages(images: string): string[] {
    try {
      return images ? JSON.parse(images) : [];
    } catch {
      return [];
    }
  }


  openCarfaxModal() {

  }
}
