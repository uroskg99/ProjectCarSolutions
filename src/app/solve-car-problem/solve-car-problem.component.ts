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
    if (this.carSymptom.symptom.label === 'povecanaPotrosnja') {
      this.solveMessage = SOLUTIONS.zameniFilterGoriva;
      return;
    } else if (this.carSymptom.symptom.label === 'problemiKocenja') {
      this.solveMessage = SOLUTIONS.zameniDiskove;
      return;
    } else if (this.carSymptom.symptom.label === 'nepravilanRadMotora') {
      this.solveMessage = SOLUTIONS.zameniKais;
      return;
    } else if (this.carSymptom.symptom.label === 'vibracijaPrilikomVoznje') {
      this.solveMessage = SOLUTIONS.zameniGume;
      return;
    } else if (this.carSymptom.symptom.label === 'cudniMirisi') {
      this.solveMessage = SOLUTIONS.zameniVazduh;
      return;
    } else if (this.carSymptom.symptom.label === 'teskoMenjanjeBrzina') {
      this.solveMessage = SOLUTIONS.zameniMenjac;
      return;
    } else if (this.carSymptom.symptom.label === 'pregrejavanjeMotora') {
      this.solveMessage = SOLUTIONS.zameniTermostat;
      return;
    } else if (this.carSymptom.symptom.label === 'indikatorNaTabli') {
      this.solveMessage = SOLUTIONS.dodajteVoduZaPrskanje;
      return;
    } else if (this.carSymptom.symptom.label === 'nedostatakSnage') {
      this.solveMessage = SOLUTIONS.zameniTurbo;
      return;
    } else {
      this.solveMessage = SOLUTIONS.defaultMessage;
      return;
    }
  }

  backToHomepage(): void {
    this.resetForms.emit();
  }

  solutionNotHelpfull(): void {
    if (this.carSymptom.symptom.label === 'problemiKocenja') {
      this.solveMessage = SOLUTIONS.zameniPlocice;
      return;
    } else if (this.carSymptom.symptom.label === 'nepravilanRadMotora') {
      this.solveMessage = SOLUTIONS.zameniMotor;
      return;
    } else if (this.carSymptom.symptom.label === 'vibracijaPrilikomVoznje') {
      this.solveMessage = SOLUTIONS.zameniTrap;
      return;
    } else if (this.carSymptom.symptom.label === 'pregrejavanjeMotora') {
      this.solveMessage = SOLUTIONS.zameniAntifriz;
      return;
    } else if (this.carSymptom.symptom.label === 'nedostatakSnage') {
      this.solveMessage = SOLUTIONS.zameniVakuumCreva;
      return;
    } else {
      this.solveMessage = SOLUTIONS.defaultMessage;
      return;
    }
  }

  goToExpenses(): void {
    this.checkExpenses.emit(this.solveMessage);
  }
}
