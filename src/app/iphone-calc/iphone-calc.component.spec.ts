import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneCalcComponent } from './iphone-calc.component';

describe('IphoneCalcComponent', () => {
  let component: IphoneCalcComponent;
  let fixture: ComponentFixture<IphoneCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IphoneCalcComponent]
    });
    fixture = TestBed.createComponent(IphoneCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
