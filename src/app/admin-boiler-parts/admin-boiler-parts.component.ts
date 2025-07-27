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

  setArray(name: 'configuration'|'images', arr: string[] = []) {
    const formArr = this.editForm.get(name) as FormArray;
    formArr.clear();
    arr.forEach(val => formArr.push(this.fb.control(val)));
  }

  edit(part: any) {
    this.selectedPart = part;
    this.editForm.patchValue(part);
    this.setArray('configuration', part.configuration || []);
    let imgs: string[] = [];
    if (Array.isArray(part.images)) {
      imgs = part.images;
    } else if (typeof part.images === 'string' && part.images.startsWith('[')) {
      try { imgs = JSON.parse(part.images); } catch { imgs = []; }
    }
    this.setArray('images', imgs);
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
}
