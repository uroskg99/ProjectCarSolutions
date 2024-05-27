import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pogon',
  templateUrl: './pogon.component.html',
  styleUrls: ['./pogon.component.scss']
})
export class PogonComponent {
  @Input() carType: any;
  @Output() goNextFromPogon = new EventEmitter<any>();
  @Output() resetForms = new EventEmitter<any>();
  pogoni = ['Prednji pogon', 'Zadnji pogon', '4x4'];

  goNext(): void {
    this.goNextFromPogon.emit();
  }

  backToHomepage(): void {
    this.resetForms.emit();
  }
}
