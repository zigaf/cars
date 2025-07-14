import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from '../../car-card/car-card.component';
import {SplideSliderComponent} from '../../splide-slider/splide-slider.component';
import {RouterLink} from '@angular/router';
import {BoilerPartsService} from '../../services/boiler-parts.service';
import {Swiper} from 'swiper';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SplideSliderComponent,
    RouterLink,
    // только так!
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroSwiperConfig = {
    slidesPerView: 1,
    loop: true,
    navigation: true,
  };

  parts: any[] = [];

  constructor(private bpService: BoilerPartsService) {}

  ngOnInit() {
    this.bpService.getAll().subscribe(data => {
      this.parts = data;
    });
  }

  getImages(imgStr: string): string[] {
    try {
      return JSON.parse(imgStr);
    } catch {
      return [imgStr];
    }
  }

  heroSlides = [
    {
      img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80',
      title: 'BOSS AUTO UKRAINE',
      subtitle: 'Авто из США под заказ',
      text: 'Покупай автомобиль мечты с выгодой до 60%!',
    },
    {
      img: 'https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=900&q=80',
      title: 'Растаможка и доставка',
      subtitle: 'Весь процесс под ключ',
      text: 'Берём на себя всю документацию, доставку и оформление в Украине.',
    },
    {
      img: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=900&q=80',
      title: 'Честная история авто',
      subtitle: 'Проверка по VIN',
      text: 'Проверим любой автомобиль на пробег, ДТП, лизинг и другие риски.',
    },
  ];

  topCars = [
    {
      img: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=900&q=80',
      brand: 'RIVIAN',
      model: 'R1S',
      year: 2023,
      price: 79000,
      top: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80',
      brand: 'Volkswagen',
      model: 'Tiguan',
      year: 2021,
      price: 37000,
      top: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=900&q=80',
      brand: 'Nissan',
      model: 'Rogue',
      year: 2022,
      price: 26000,
      top: true,
    },
    // Добавь еще
  ];
}
