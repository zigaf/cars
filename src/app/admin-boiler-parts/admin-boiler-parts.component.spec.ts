import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBoilerPartsComponent } from './admin-boiler-parts.component';

describe('AdminBoilerPartsComponent', () => {
  let component: AdminBoilerPartsComponent;
  let fixture: ComponentFixture<AdminBoilerPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBoilerPartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBoilerPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
