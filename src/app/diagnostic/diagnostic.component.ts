import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss'],
})
export class DiagnosticComponent implements OnInit {
  @Output() goNextDiagnostic = new EventEmitter<any>();
  form = new FormGroup({
    godina: new FormControl<number>(2000, Validators.required),
    maliServis: new FormControl<any>(null, Validators.required),
  });

  maliServisi = [
    { label: '10', name: 'Manje od 10km' },
    { label: '10-50', name: 'Izmedju 10km i 50km' },
    { label: '50-100', name: 'Izmedju 50km i 100km' },
    { label: '100-200', name: 'Izmedju 100km i 200km' },
    { label: '200', name: 'Preko 200km' },
  ];

  informacijePrikaz = true;
  informacijeMessage = '';

  ngOnInit(): void {
    this.registerFormChange();
  }

  goNext(): void {
    this.goNextDiagnostic.emit();
  }

  prikaziInformacije(): void {
    this.informacijePrikaz = false;

    if (
      this.form.controls['godina'].value! < 2000 &&
      (this.form.controls['maliServis'].value.label === '200' ||
        this.form.controls['maliServis'].value.label === '100-200')
    ) {
      this.informacijeMessage = 'Obavezno uraditi mali servis';
    } else if (
      this.form.controls['godina'].value! >= 2000 &&
      (this.form.controls['maliServis'].value.label === '10' ||
        this.form.controls['maliServis'].value.label === '10-50')
    ) {
      this.informacijeMessage = 'Mali servis nije obavezan';
    } else {
      this.informacijeMessage = 'Preporucujemo da uradite mali servis';
    }
  }

  registerFormChange(): void {
    this.form.valueChanges.subscribe((_) => {
      this.informacijeMessage = '';
      this.informacijePrikaz = true;
    });
  }
}
