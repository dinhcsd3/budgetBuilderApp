import { Component } from '@angular/core';
import { CategoriesCalculationComponent } from '../../shared/categories-calculation/categories-calculation.component';
import { Category } from '../../core/models/category.model';
import { MONTHS_OF_YEAR } from '../../core/constants/months-of-year.constant';
import { KeyCategoryEnum } from '../../core/enums/key-category.enum';

@Component({
  selector: 'avnon-expense-budget-spreadsheet',
  standalone: true,
  imports: [CategoriesCalculationComponent],
  templateUrl: './expense-budget-spreadsheet.component.html',
  styleUrl: './expense-budget-spreadsheet.component.css'
})
export class ExpenseBudgetSpreadsheetComponent {

  public readonly keyCategory: KeyCategoryEnum = KeyCategoryEnum.Expense;
  public readonly months: string[] = MONTHS_OF_YEAR;

  public categories: Category[] = [
    {
      categoryName: '',
      values: Array(this.months.length).fill(0),
      isParentCategory: true,
      isNew: true
    }
  ]
  
}