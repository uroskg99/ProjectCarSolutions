import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarTypeComponent } from './car-type/car-type.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarSymptomComponent } from './car-symptom/car-symptom.component';
import { SolveCarProblemComponent } from './solve-car-problem/solve-car-problem.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { ProblemExpensesComponent } from './problem-expenses/problem-expenses.component';

@NgModule({
  declarations: [AppComponent, CarTypeComponent, CarSymptomComponent, SolveCarProblemComponent, DiagnosticComponent, ProblemExpensesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
