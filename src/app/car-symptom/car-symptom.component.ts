import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CAR_SYMPTOMS } from '../symptoms';

@Component({
  selector: 'app-car-symptom',
  templateUrl: './car-symptom.component.html',
  styleUrls: ['./car-symptom.component.scss'],
})
export class CarSymptomComponent implements OnInit {
  @Output() saveFormEvent = new EventEmitter<any>();
  @Output() goBackEvent = new EventEmitter<any>();
  @Input() carType!: any;
  form = new FormGroup({
    symptom: new FormControl(null, Validators.required),
  });
  symptoms = CAR_SYMPTOMS;

  ngOnInit(): void {}

  goNext(): void {
    this.saveFormEvent.emit(this.form.getRawValue());
  }

  goBack(): void {
    this.goBackEvent.emit();
  }
}
