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
    { label: '100', name: 'Manje od 100km' },
    { label: '500-1500', name: 'Izmedju 500km i 1500km' },
    { label: '1500-5000', name: 'Izmedju 1500km i 5000km' },
    { label: '5000-7500', name: 'Izmedju 5000km i 7500km' },
    { label: '7500-10000', name: 'Izmedju 7500km i 10000km' },
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
      (this.form.controls['maliServis'].value.label === '100' ||
        this.form.controls['maliServis'].value.label === '500-1500')
    ) {
      this.informacijeMessage = 'Obavezno uraditi mali servis';
    } else if (
      this.form.controls['godina'].value! >= 2000 &&
      (this.form.controls['maliServis'].value.label === '100' ||
        this.form.controls['maliServis'].value.label === '500-1500')
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
