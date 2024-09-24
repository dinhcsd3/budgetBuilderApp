import { Component } from '@angular/core';
import { CategoriesCalculationComponent } from '../../shared/categories-calculation/categories-calculation.component';
import { Category } from '../../core/models/category.model';
import { KeyCategoryEnum } from '../../core/enums/key-category.enum';
import { MONTHS_OF_YEAR } from '../../core/constants/months-of-year.constant';

@Component({
  selector: 'avnon-income-budget-spreadsheet',
  standalone: true,
  imports: [CategoriesCalculationComponent],
  templateUrl: './income-budget-spreadsheet.component.html',
  styleUrl: './income-budget-spreadsheet.component.css'
})
export class IncomeBudgetSpreadsheetComponent {

  public readonly keyCategory: KeyCategoryEnum = KeyCategoryEnum.Income;
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
