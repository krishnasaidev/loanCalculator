import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loanCalculator';
  maximumFunding = 17484500;
  loanAmount = 14500000;
  minLoan = 1000000;
  maxLoan = 17480000;

  loanPeriod = 12;
  minPeriod = 6;
  maxPeriod = 18;

  calculateMonthlyPayment(): number {
    return Math.round(this.loanAmount / this.loanPeriod);
  }

  applyLoan() {
    console.log(this.loanAmount)
  }

}
