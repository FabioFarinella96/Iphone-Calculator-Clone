import { Component } from '@angular/core';

interface Valute {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-currency-euro-converter',
  templateUrl: './currency-euro-converter.component.html',
  styleUrls: ['./currency-euro-converter.component.scss'],
})
export class CurrencyEuroConverterComponent {
  inputValue: string = '';
  element: boolean = false;
  symbol: string = '';

  option = document.getElementsByClassName('mat-mdc-select-min-line');

  onKeyUp(e: any) {
    if (this.option[0].innerHTML === '🇺🇸 $ DOLLAR') {
      this.inputValue = '';
      this.symbol = '$';
      this.inputValue += (e.target.value * 1.12).toFixed(2);
      this.symbol = '$';
    } else if (this.option[0].innerHTML === '🇨🇭 CHF (swiss-franc)') {
      this.inputValue = '';
      this.symbol = 'CHF';

      this.inputValue += (e.target.value * 0.96).toFixed(2);
    } else if (this.option[0].innerHTML === '🇬🇧 £ STERLIN') {
      this.inputValue = '';
      this.symbol = '£';
      this.inputValue += (e.target.value * 0.85).toFixed(2);
    }
  }

  valute: Valute[] = [
    { value: 'swiss-franc', viewValue: '🇨🇭 CHF (swiss-franc)' },
    { value: 'dollar', viewValue: '🇺🇸 $ DOLLAR' },
    { value: 'sterlin-3', viewValue: '🇬🇧 £ STERLIN' },
  ];
}
