import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-type',
  templateUrl: './car-type.component.html',
  styleUrls: ['./car-type.component.scss'],
})
export class CarTypeComponent implements OnInit {
  @Output() saveFormEvent = new EventEmitter<any>();
  @Input() carTypeForm?: any;
  form = new FormGroup({
    marka: new FormControl(null, Validators.required),
    tipGoriva: new FormControl(null, Validators.required),
    menjac: new FormControl(null, Validators.required),
  });

  marke = [
    {
      label: 'bmw',
      name: 'BMW',
    },
    {
      label: 'mercedes',
      name: 'Mercedes',
    },
    {
      label: 'alfa',
      name: 'Alfa Romeo',
    },
    {
      label: 'Yugo',
      name: 'Yugo Koral',
    },
    {
      label: 'opel',
      name: 'Opel',
    },
  ];

  tipGoriva = [
    {
      label: 'benzin',
      name: 'Benzin',
    },
    {
      label: 'dizel',
      name: 'Dizel',
    },
  ];

  menjaci = [
    {
      label: 'automatik',
      name: 'Automatski menjac',
    },
    {
      label: 'manuelac',
      name: 'Manuelni menjac',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  goNext(): void {
    this.saveFormEvent.emit(this.form.getRawValue());
  }
}
