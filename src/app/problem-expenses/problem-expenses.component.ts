import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-problem-expenses',
  templateUrl: './problem-expenses.component.html',
  styleUrls: ['./problem-expenses.component.scss'],
})
export class ProblemExpensesComponent implements OnInit {
  @Input() carType!: any;
  @Input() carSymptom!: any;
  @Output() resetForms = new EventEmitter<any>();
  price = 300;

  ngOnInit(): void {}

  lowerPrice(): void {}

  backToHomepage(): void {
    this.resetForms.emit();
  }
}
