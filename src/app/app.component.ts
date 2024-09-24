import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesCalculationComponent } from './categories-calculation/categories-calculation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesCalculationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budgetBuilderApp';
}
