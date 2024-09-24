import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCalculationComponent } from './categories-calculation.component';

describe('CategoriesCalculationComponent', () => {
  let component: CategoriesCalculationComponent;
  let fixture: ComponentFixture<CategoriesCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
