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

  getCarTypeForm(e: any): void {
    this.carTypeForm = e;
    this.pageIndex = 1;
  }

  diagnosticGoNext(): void {
    this.pageIndex = 2;
  }

  getCarSymptom(e: any): void {
    this.carSymptom = e;
    this.pageIndex = 3;
  }

  resetForms(): void {
    this.carTypeForm = null;
    this.carSymptom = null;
    this.pageIndex = 0;
  }

  getBackAndRestoreForm(): void {
    this.pageIndex = 0;
  }
}
