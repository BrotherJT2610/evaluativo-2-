import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBancosComponent } from './card-bancos.component';

describe('CardBancosComponent', () => {
  let component: CardBancosComponent;
  let fixture: ComponentFixture<CardBancosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBancosComponent]
    });
    fixture = TestBed.createComponent(CardBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
