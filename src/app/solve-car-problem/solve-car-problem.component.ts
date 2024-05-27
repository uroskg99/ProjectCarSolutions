import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SOLUTIONS } from '../solutions';

@Component({
  selector: 'app-solve-car-problem',
  templateUrl: './solve-car-problem.component.html',
  styleUrls: ['./solve-car-problem.component.scss'],
})
export class SolveCarProblemComponent implements OnInit {
  @Input() carType!: any;
  @Input() carSymptom!: any;
  @Output() resetForms = new EventEmitter<any>();
  @Output() checkExpenses = new EventEmitter<any>();
  solveMessage = '';
  allSolutions = SOLUTIONS;

  ngOnInit(): void {
    console.log(this.carType, 'CAR TYPE');
    console.log(this.carSymptom, 'CAR SYMPTOM');
    if (
      this.carSymptom.symptom.label === 'povecanaPotrosnja' &&
      this.carType.tipGoriva.label === 'dizel'
    ) {
      this.solveMessage = SOLUTIONS.zameniFilterGoriva;
    } else if (
      this.carType.menjac.label === 'automatik' &&
      this.carType.tipGoriva.label === 'benzin' &&
      this.carSymptom.symptom.label === 'problemiKocenja'
    ) {
      this.solveMessage = SOLUTIONS.zameniDiskove;
    } else {
      this.solveMessage = SOLUTIONS.defaultMessage;
    }
  }

  backToHomepage(): void {
    this.resetForms.emit();
  }

  solutionNotHelpfull(): void {
    if (
      this.carType.menjac.label === 'automatik' &&
      this.carType.tipGoriva.label === 'benzin' &&
      this.carSymptom.symptom.label === 'problemiKocenja'
    ) {
      this.solveMessage = SOLUTIONS.zameniPlocice;
    } else {
      this.solveMessage = SOLUTIONS.defaultMessage;
    }
  }

  goToExpenses(): void {
    this.checkExpenses.emit();
  }
}
