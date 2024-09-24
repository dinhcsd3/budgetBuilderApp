import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MONTHS_OF_YEAR } from '../../core/constants/months-of-year.constant';
import { FormsModule } from '@angular/forms';
import { Category } from '../../core/models/category.model';
import { KeyCategoryEnum } from '../../core/enums/key-category.enum';
import { MonthOfYearEnum } from '../../core/enums/months-of-year.enum';
import { KeyboardControlEnum } from '../../core/enums/keyboard-control.enum';

@Component({
  selector: 'avnon-categories-calculation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  exportAs: 'categoriesCalculation',
  templateUrl: './categories-calculation.component.html',
  styleUrl: './categories-calculation.component.css'
})
export class CategoriesCalculationComponent {

  @Input() keyCategory: KeyCategoryEnum = KeyCategoryEnum.Income;
  @Input() months: string[] = [];
  @Input() categories: Category[] = [];

  public contextMenuVisible: boolean = false;
  public contextMenuPosition = { x: '0px', y: '0px' };

  public readonly monthsSelectOptions = MONTHS_OF_YEAR;
  public selectedStartMonth = MonthOfYearEnum.January;
  public selectedEndMonth = MonthOfYearEnum.December;

  public handleNavigation(event: KeyboardEvent, rowIndex: number, colIndex: number): void {
    const inputElements = document.querySelectorAll('input');
    const currentIndex = rowIndex * this.months.length + colIndex;

    switch (event.key) {
      case KeyboardControlEnum.ArrowRight:
        break;
      case KeyboardControlEnum.Tab:
        event.preventDefault();
        if (inputElements[currentIndex + 1]) {
          (inputElements[currentIndex + 1] as HTMLElement).focus();
        }
        break;
      case KeyboardControlEnum.ArrowLeft:
        if (inputElements[currentIndex - 1]) {
          (inputElements[currentIndex - 1] as HTMLElement).focus();
        }
        break;
      case KeyboardControlEnum.ArrowUp:
        if (rowIndex > 0) {
          (inputElements[currentIndex - this.months.length] as HTMLElement).focus();
        }
        break;
      case KeyboardControlEnum.ArrowDown:
        if (rowIndex < this.categories.length - 1) {
          (inputElements[currentIndex + this.months.length] as HTMLElement).focus();
        }
        break;
    }
  }

  public createNewCategory(category: Category): void {
    if (category.categoryName.trim() === '') {
      this.categories.pop();
    } else {
      category.isNew = false;
    }
    this.categories.push({ categoryName: '', values: Array(this.months.length).fill(0), isParentCategory: true, isNew: true });
  }

  public calculateRowTotal(category: Category): number {
    return category.values.map(value => +value).reduce((sum, value) => sum + value, 0);
  }

  public openContextMenu(event: MouseEvent, rowIndex: number, colIndex: number): void {
    event.preventDefault();
    this.contextMenuVisible = true;
    this.contextMenuPosition = { x: `${event.clientX}px`, y: `${event.clientY}px` };
  }

  public applyToAll(rowIndex: number, colIndex: number): void {
    const value = this.categories[rowIndex].values[colIndex];
    for (let category of this.categories) {
      category.values[colIndex] = value;
    }
    this.contextMenuVisible = false;
  }

  public updateMonthRange(): void {
    const allMonths = MONTHS_OF_YEAR;
    const startIndex = allMonths.indexOf(this.selectedStartMonth);
    const endIndex = allMonths.indexOf(this.selectedEndMonth);
    this.months = allMonths.slice(startIndex, endIndex + 1);
    this.categories.forEach(category => {
      category.values = Array(this.months.length).fill(0);
    });
  }

  public getColumnSubtotal(colIndex: number): number {
    return this.categories.map(category => +category.values[colIndex]).reduce((sum, value) => sum + value, 0);
  }

  public getOverallTotal(): number {
    return this.categories.reduce((sum, category) => sum + this.calculateRowTotal(category), 0);
  }

  public deleteCategoryRow(rowIndex: number): void {
    this.categories.splice(rowIndex, 1);
  }

}
