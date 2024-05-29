import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SOLUTIONS } from '../solutions';

@Component({
  selector: 'app-problem-expenses',
  templateUrl: './problem-expenses.component.html',
  styleUrls: ['./problem-expenses.component.scss'],
})
export class ProblemExpensesComponent implements OnInit {
  @Input() carType!: any;
  @Input() carSymptom!: any;
  @Input() solution!: any;
  @Output() resetForms = new EventEmitter<any>();
  price = '';
  descriptionMessage = '';

  ngOnInit(): void {
    console.log(this.solution);
    if (this.solution === SOLUTIONS.zameniFilterGoriva) {
      this.price = 'Cena 8-25$';
      this.descriptionMessage =
        'Ukoliko je filter goriva do te mere zaprljan moze doci do povecane potrosnje';
    } else if (this.solution === SOLUTIONS.zameniTurbo) {
      this.price = 'cena 300-700$';
      this.descriptionMessage =
        'zamenom neispravnog  Turbo punjaca bi se resio problem sa gubitnom snagee';
    } else if (this.solution === SOLUTIONS.zameniVakuumCreva) {
      this.price = 'cena 20-50$';
      this.descriptionMessage =
        'zamena Vakuum creva bi bila jeftinija opcija i potencijalno resila problem sa gubitkom pritiska usled kog nemate punu snagu motora';
    } else if (this.solution === SOLUTIONS.dodajteVoduZaPrskanje) {
      this.price = 'cena 5-10$';
      this.descriptionMessage =
        'Pojavlila vam se lampica za nedostatak tecnosti za sofersajbnu, dopunite';
    } else if (this.solution === SOLUTIONS.zameniTermostat) {
      this.price = 'cena 100-250$';
      this.descriptionMessage =
        'Usled kvara termostata automobil nije u stanju da zadrzi radnu temperaturu zbog toga se i pregreva';
    } else if (this.solution === SOLUTIONS.zameniAntifriz) {
      this.price = 'cena 10-30$';
      this.descriptionMessage =
        'Auto nema dovoljno rashladne tecnosti kojim bi rashladio motor. Sipajte G12 Antifriz';
    } else if (this.solution === SOLUTIONS.zameniMenjac) {
      this.price = 'cena 80-250$';
      this.descriptionMessage =
        'Vasem menjacu je potreban servis istog iz razloga sto je ulje i filter ulja veoma staro i zato vam preskacu brzine';
    } else if (this.solution === SOLUTIONS.zameniVazduh) {
      this.price = 'cena 5-15$';
      this.descriptionMessage =
        'Filter kabine vazduha je pun prljavstine zbog toga se u kabini osecanju neprijatni mirisi';
    } else if (this.solution === SOLUTIONS.zameniTrap) {
      this.price = 'cena 20-100$';
      this.descriptionMessage =
        'Vibracije koje osecate u voznji su zbog loseg trapa. Cena pregleda varira od servisera do servisera';
    } else if (this.solution === SOLUTIONS.zameniGume) {
      this.price = 'cena 50-500$';
      this.descriptionMessage =
        'Gume su dotrajale i zbog toga su se deformisale i nisu u balansu';
    } else if (this.solution === SOLUTIONS.zameniKais) {
      this.price = 'cena 100-350$';
      this.descriptionMessage =
        'Kais se istegao i zbog toga motor ima nepravilan rad  i mora zamena kaisa sa pratecim delovima';
    } else if (this.solution === SOLUTIONS.zameniMotor) {
      this.price = 'cena 500-1500$';
      this.descriptionMessage =
        'Ovlasceni servis ne radi sitne popravke na motorima zato je predlozena zamena celog motora';
    } else if (this.solution === SOLUTIONS.zameniDiskove) {
      this.price = 'cena 200-500$';
      this.descriptionMessage =
        'Usled krivih disskova na kocionom sistemu zahvalna bi bila zamena istih';
    } else if (this.solution === SOLUTIONS.zameniPlocice) {
      this.price = 'cena 30-100$';
      this.descriptionMessage =
        'Ukoliko diskovi nisu krivi plocice na diskovima su dotrajale i potrebno ih je zameniti';
    } else {
      this.price = '/';
      this.descriptionMessage = 'Trenutno nam ovaj problem nije poznat';
    }
  }

  lowerPrice(): void {
    this.price = '20$';
    this.descriptionMessage =
      'Idite kod vaseg servisera i proverite sa njim da li postoji druga solucija da bi bila manja cena.';
  }

  backToHomepage(): void {
    this.resetForms.emit();
  }
}
