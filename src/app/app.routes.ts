import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {CarDetailsComponent} from './car-details/car-details.component';
import {AdminBoilerPartsComponent} from './admin-boiler-parts/admin-boiler-parts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  {
    path: 'admin/boiler-parts',
    loadComponent: () =>
      import('./admin-boiler-parts/admin-boiler-parts.component')
        .then(m => m.AdminBoilerPartsComponent)
  }
];
