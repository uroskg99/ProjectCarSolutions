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
    tipGoriva: new FormControl<any>(null, Validators.required),
    menjac: new FormControl<any>(null, Validators.required),
  });

  selectedMarka: any = null;

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
    {
      label: 'tesla',
      name: 'Tesla',
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

  ngOnInit(): void {
    this.registerMarkaChange();
  }

  goNext(): void {
    this.saveFormEvent.emit(this.form.getRawValue());
  }

  registerMarkaChange(): void {
    this.form.controls['marka'].valueChanges.subscribe((res) => {
      this.form.controls.tipGoriva.enable();
      this.selectedMarka = res;
      if (this.selectedMarka.label === 'tesla') {
        this.tipGoriva = [
          {
            label: 'elektricni',
            name: 'Elektricni automobil',
          },
        ];
        this.form.controls['tipGoriva'].patchValue(this.tipGoriva[0]);
        this.form.controls['tipGoriva'].disable();
        this.form.controls['menjac'].patchValue(this.menjaci[0]);
        this.form.controls['menjac'].disable();
      } else {
        this.tipGoriva = [
          {
            label: 'benzin',
            name: 'Benzin',
          },
          {
            label: 'dizel',
            name: 'Dizel',
          },
        ];
      }
    });
  }
}
