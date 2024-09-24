import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseBudgetSpreadsheetComponent } from './expense-budget-spreadsheet.component';

describe('ExpenseBudgetSpreadsheetComponent', () => {
  let component: ExpenseBudgetSpreadsheetComponent;
  let fixture: ComponentFixture<ExpenseBudgetSpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseBudgetSpreadsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseBudgetSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
