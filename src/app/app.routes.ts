import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {CarDetailsComponent} from './car-details/car-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'car/:id', component: CarDetailsComponent },  // <--- новая страница

];
