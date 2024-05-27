import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emisija-gasova',
  templateUrl: './emisija-gasova.component.html',
  styleUrls: ['./emisija-gasova.component.scss']
})
export class EmisijaGasovaComponent {
  @Output() goNextFromEmisija = new EventEmitter<any>();
  @Output() resetForms = new EventEmitter<any>();
  @Input() carType: any;

  emisije = ['Euro 1', 'Euro 2', 'Euro 3', 'Euro 4', 'Euro 5', 'Euro 6'];

  backToHomepage(): void {
    this.resetForms.emit();
  }

  goNext(): void {
    this.goNextFromEmisija.emit();
  }
}
