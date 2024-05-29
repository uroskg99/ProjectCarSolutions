import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'car-issues';

  carTypeForm: any;
  carSymptom: any;
  pageIndex = 0;
  solution: any;

  getCarTypeForm(e: any): void {
    this.carTypeForm = e;
    this.pageIndex = 1;
  }

  diagnosticGoNext(): void {
    this.pageIndex = 2;
  }

  goNextFromPogon(): void {
    this.pageIndex = 3;
    if (this.carTypeForm.marka.label === 'tesla') {
      this.pageIndex = 4;
    }
  }

  goNextFromEmisija(): void {
    this.pageIndex = 4;
  }

  getCarSymptom(e: any): void {
    this.carSymptom = e;
    this.pageIndex = 5;
  }

  resetForms(): void {
    this.carTypeForm = null;
    this.carSymptom = null;
    this.pageIndex = 0;
  }

  getBackAndRestoreForm(): void {
    this.pageIndex = 0;
  }

  goToExpenses(e: any): void {
    this.solution = e;
    this.pageIndex = 6;
  }
}
