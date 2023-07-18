import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyEuroConverterComponent } from './currency-euro-converter.component';

describe('CurrencyEuroConverterComponent', () => {
  let component: CurrencyEuroConverterComponent;
  let fixture: ComponentFixture<CurrencyEuroConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyEuroConverterComponent]
    });
    fixture = TestBed.createComponent(CurrencyEuroConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
