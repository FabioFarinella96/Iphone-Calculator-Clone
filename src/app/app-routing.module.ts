import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IphoneCalcComponent } from './iphone-calc/iphone-calc.component';
import { CurrencyEuroConverterComponent } from './currency-euro-converter/currency-euro-converter.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'iphone-calc', component: IphoneCalcComponent },
  { path: 'converter', component: CurrencyEuroConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
