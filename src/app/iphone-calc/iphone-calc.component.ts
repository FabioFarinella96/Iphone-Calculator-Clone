import { Component } from '@angular/core';

@Component({
  selector: 'app-iphone-calc',
  templateUrl: './iphone-calc.component.html',
  styleUrls: ['./iphone-calc.component.scss'],
})
export class IphoneCalcComponent {
  displayNumber: any = 0;
  firstNum: number = 0;
  secondNum: number = 0;
  operationType: string = '';
  NaN: any;

  operation(dato: any) {
    if (this.displayNumber === 0) {
      this.displayNumber = '';
    }
    this.displayNumber += dato;

    if (dato === 'AC') {
      this.displayNumber = 0;
    }

    if (
      dato === '+' ||
      dato === '-' ||
      dato === 'X' ||
      dato === '/' ||
      dato === '%'
    ) {
      this.operationType = dato;
      this.firstNum = parseFloat(this.displayNumber);
      this.displayNumber = '';
    }

    if (dato === '=') {
      this.secondNum = parseFloat(this.displayNumber);
      if (this.operationType === '+') {
        this.displayNumber = this.firstNum + this.secondNum;
      } else if (this.operationType === '-') {
        this.displayNumber = this.firstNum - this.secondNum;
      } else if (this.operationType === 'X') {
        this.displayNumber = this.firstNum * this.secondNum;
      } else if (this.operationType === '/') {
        this.displayNumber = this.firstNum / this.secondNum;
      } else if (this.operationType === '%') {
        this.displayNumber = this.firstNum % this.secondNum;
      }
      this.operationType = '';
    }
    console.log(this.displayNumber);
  }
}
