import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BoilerPartsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>('/api/boiler-parts');
  }

  getCarById(id: string) {
    return this.http.get<any>(`/api/boiler-parts/${id}`);
  }
}
