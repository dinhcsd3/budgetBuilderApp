import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncomeBudgetSpreadsheetComponent } from './components/income-budget-spreadsheet/income-budget-spreadsheet.component';
import { ExpenseBudgetSpreadsheetComponent } from './components/expense-budget-spreadsheet/expense-budget-spreadsheet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IncomeBudgetSpreadsheetComponent, ExpenseBudgetSpreadsheetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budgetBuilderApp';
}
