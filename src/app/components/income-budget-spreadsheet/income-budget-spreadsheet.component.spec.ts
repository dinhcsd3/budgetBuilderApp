import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeBudgetSpreadsheetComponent } from './income-budget-spreadsheet.component';

describe('IncomeBudgetSpreadsheetComponent', () => {
  let component: IncomeBudgetSpreadsheetComponent;
  let fixture: ComponentFixture<IncomeBudgetSpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeBudgetSpreadsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeBudgetSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
