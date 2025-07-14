import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-car-card',
  standalone: true,
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  imports: [CommonModule] // обязательно!
})
export class CarCardComponent {
  @Input() car: any;
}
