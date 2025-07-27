import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-admin-boiler-parts',
  standalone: true,
  templateUrl: './admin-boiler-parts.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DecimalPipe
  ]
})
export class AdminBoilerPartsComponent implements OnInit {
  parts: any[] = [];
  selectedPart: any = null;
  formVisible = false;
  editForm: FormGroup;

  constructor(
    private api: HttpClient,
    protected fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.editForm = this.fb.group({
      name: [''],
      price: [0],
      boiler_manufacturer: [''],
      parts_manufacturer: [''],
      vendor_code: [''],
      description: [''],
      images: this.fb.array([]),
      in_stock: [0],
      bestseller: [false],
      new: [false],
      popularity: [0],
      compatibility: [''],
      createdAt: [''],
      updatedAt: [''],
      Model: [''],
      Year: [''],
      Mileage: [''],
      Engine: [''],
      Transmission: [''],
      Drive: [''],
      fuel: [''],
      processed: [''],
      configuration: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.get('/api/boiler-parts').subscribe((data: any) => this.parts = data);
  }

  get configuration() {
    return this.editForm.get('configuration') as FormArray;
  }

  get images() {
    return this.editForm.get('images') as FormArray;
  }



  edit(part: any) {
    this.selectedPart = part;
    console.log(part, 'part');

    // Сначала массивы
    let config = part.configuration;
    if (typeof config === 'string') {
      try { config = JSON.parse(config); } catch { config = config.split(',').map((v: string) => v.trim()).filter(Boolean); }
    }
    if (!Array.isArray(config)) config = [];
    this.setArray('configuration', config);

    let imgs = part.images;
    if (typeof imgs === 'string') {
      try { imgs = JSON.parse(imgs); } catch { imgs = imgs.split(',').map((v: string) => v.trim()).filter(Boolean); }
    }
    if (!Array.isArray(imgs)) imgs = [];
    this.setArray('images', imgs);

    // Теперь остальные поля (НЕ массивы!)
    // Создаём копию объекта БЕЗ images/configuration
    const { configuration, images, ...rest } = part;
    this.editForm.patchValue(rest);

    this.formVisible = true;
    this.cd.detectChanges();
  }
  createNew() {
    this.selectedPart = null;
    this.editForm.reset({ price: 0, in_stock: 0 });
    this.setArray('configuration', []);
    this.setArray('images', []);
    this.formVisible = true;
    this.cd.detectChanges();
  }

  cancel() {
    this.formVisible = false;
    this.editForm.reset();
  }

  save() {
    const dto = {
      ...this.editForm.value,
      configuration: this.configuration.value,
      images: this.images.value,
    };

    if (this.selectedPart) {
      this.api.put(`/api/boiler-parts/${this.selectedPart.id}`, dto).subscribe(() => {
        this.load();
        this.cancel();
      });
    } else {
      this.api.post(`/api/boiler-parts`, dto).subscribe(() => {
        this.load();
        this.cancel();
      });
    }
  }

  delete(id: number) {
    if (!confirm('Удалить товар?')) return;
    this.api.delete(`/api/boiler-parts/${id}`).subscribe(() => this.load());
  }

  asArray(val: any): string[] {
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      try {
        const parsed = JSON.parse(val);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        return val.split(',').map(x => x.trim()).filter(Boolean);
      }
    }
    return [];
  }

  setArray(name: 'configuration' | 'images', arr: any = []) {
    const formArr = this.editForm.get(name) as FormArray;
    formArr.clear();

    // Жёсткая защита:
    if (arr == null || arr === undefined) arr = [];

    if (typeof arr === 'string') {
      try {
        const parsed = JSON.parse(arr);
        arr = Array.isArray(parsed) ? parsed : [];
      } catch {
        // если строка не парсится в массив, делим по запятой
        arr = arr.split(',').map((v: string) => v.trim()).filter(Boolean);
      }
    }

    if (!Array.isArray(arr)) arr = [];

    // Теперь arr гарантированно массив!
    arr.forEach((val: string) => formArr.push(this.fb.control(val)));
  }
}
