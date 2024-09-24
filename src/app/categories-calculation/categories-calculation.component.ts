import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MONTHS_OF_YEAR } from '../core/constants/months-of-year.constant';
import { FormsModule } from '@angular/forms';
import { Category } from '../core/models/category.model';

@Component({
  selector: 'avnon-categories-calculation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  exportAs: 'categoriesCalculation',
  templateUrl: './categories-calculation.component.html',
  styleUrl: './categories-calculation.component.css'
})
export class CategoriesCalculationComponent {

  public months: string[] = MONTHS_OF_YEAR;
  // public categories: Category[] = [
  //   {
  //     parentName: '',
  //     categoryName: '',
  //     values: Array(this.months.length).fill(0),
  //     isParentCategory: true,
  //     isNew: true
  //   },
  //   {
  //     parentName: '',
  //     categoryName: '',
  //     values: Array(this.months.length).fill(0),
  //     isNew: true
  //   },
  //   {
  //     parentName: KeyCategoryEnum.Expense,
  //     categoryName: KeyCategoryEnum.Income,
  //     values: Array(this.months.length).fill(0),
  //     isParentCategory: true,
  //     isNew: true
  //   },
  //   {
  //     parentName: KeyCategoryEnum.Income,
  //     categoryName: '',
  //     values: Array(this.months.length).fill(0),
  //     isNew: true
  //   },
  // ];

  // public contextMenuVisible: boolean = false;
  // public contextMenuPosition = { x: '0px', y: '0px' };

  // public selectedStartMonth = MonthOfYearEnum.January;
  // public selectedEndMonth = MonthOfYearEnum.December;

  // public handleNavigation(event: KeyboardEvent, rowIndex: number, colIndex: number): void {
  //   const inputElements = document.querySelectorAll('input');
  //   const currentIndex = rowIndex * this.months.length + colIndex;

  //   switch (event.key) {
  //     case KeyboardControlEnum.ArrowRight:
  //       break;
  //     case KeyboardControlEnum.Tab:
  //       event.preventDefault();
  //       if (inputElements[currentIndex + 1]) {
  //         (inputElements[currentIndex + 1] as HTMLElement).focus();
  //       }
  //       break;
  //     case KeyboardControlEnum.ArrowLeft:
  //       if (inputElements[currentIndex - 1]) {
  //         (inputElements[currentIndex - 1] as HTMLElement).focus();
  //       }
  //       break;
  //     case KeyboardControlEnum.ArrowUp:
  //       if (rowIndex > 0) {
  //         (inputElements[currentIndex - this.months.length] as HTMLElement).focus();
  //       }
  //       break;
  //     case KeyboardControlEnum.ArrowDown:
  //       if (rowIndex < this.categories.length - 1) {
  //         (inputElements[currentIndex + this.months.length] as HTMLElement).focus();
  //       }
  //       break;
  //   }
  // }

  // public createNewCategory(category: Category): void {
  //   if (category.categoryName.trim() === '') {
  //     this.categories.pop();
  //   } else {
  //     category.isNew = false;
  //   }
  //   this.categories.push({ parentName: category.parentName, categoryName: '', values: Array(this.months.length).fill(0), isNew: true });
  // }

  // public calculateRowTotal(category: Category): number {
  //   return category.values?.reduce((a, b) => a + b, 0);
  // }

  // public openContextMenu(event: MouseEvent, rowIndex: number, colIndex: number): void {
  //   event.preventDefault();
  //   this.contextMenuVisible = true;
  //   this.contextMenuPosition = { x: `${event.clientX}px`, y: `${event.clientY}px` };
  // }

  // public applyToAll(rowIndex: number, colIndex: number): void {
  //   const value = this.categories[rowIndex].values[colIndex];
  //   for (let category of this.categories) {
  //     category.values[colIndex] = value;
  //   }
  //   this.contextMenuVisible = false;
  // }

  // public updateMonthRange(): void {
  //   const allMonths = MONTHS_OF_YEAR;
  //   const startIndex = allMonths.indexOf(this.selectedStartMonth);
  //   const endIndex = allMonths.indexOf(this.selectedEndMonth);
  //   this.months = allMonths.slice(startIndex, endIndex + 1);
  //   this.categories.forEach(category => {
  //     category.values = Array(this.months.length).fill(0);
  //   });
  // }

  // public getColumnSubtotal(colIndex: number): number {
  //   return this.categories.reduce((sum, category) => sum + category.values[colIndex], 0);
  // }

  // public getOverallTotal(): number {
  //   return this.categories.reduce((sum, category) => sum + this.calculateRowTotal(category), 0);
  // }

  public incomeCategories: Category[] = [
    { name: 'General Income', amounts: [100, 120], isParentCategory: true },
    { name: 'Sales', amounts: [200, 400], isParentCategory: false }
  ];

  public expenseCategories: Category[] = [
    { name: 'Operational Expenses', amounts: [50, 100], isParentCategory: true }
  ];

  public incomeTotals: number[] = this.calculateTotals(this.incomeCategories);
  public expenseTotals: number[] = this.calculateTotals(this.expenseCategories);

  public addNewRow(): void {
    this.incomeCategories.push({
      name: 'New Income Category',
      amounts: Array(this.months.length).fill(0),
      isParentCategory: false,
      isNewCategory: true
    });
  }

  public calculateTotals(categories: Category[]): number[] {
    const totals = Array(this.months.length).fill(0);
    categories.forEach(category => {
      category.amounts.forEach((amount, index) => {
        totals[index] += amount;
      });
    });
    return totals;
  }

  public openContextMenu(event: MouseEvent, amount: number): void {
    event.preventDefault();
    // Show popup with 'Apply to all' option and copy amount to all cells
    this._applyToAll(amount);
  }
  
  private _applyToAll(value: number): void {
    this.incomeCategories.forEach(category => {
      category.amounts = category.amounts.map(() => value);
    });
    this.expenseCategories.forEach(category => {
      category.amounts = category.amounts.map(() => value);
    });
  }

  public updateTotals(): void {
    this.incomeTotals = this.calculateTotals(this.incomeCategories);
    this.expenseTotals = this.calculateTotals(this.expenseCategories);
  }

  public deleteRow(index: number): void {
    this.incomeCategories.splice(index, 1);
    this.updateTotals();
  }

}
