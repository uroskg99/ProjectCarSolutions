import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemExpensesComponent } from './problem-expenses.component';

describe('ProblemExpensesComponent', () => {
  let component: ProblemExpensesComponent;
  let fixture: ComponentFixture<ProblemExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemExpensesComponent]
    });
    fixture = TestBed.createComponent(ProblemExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
