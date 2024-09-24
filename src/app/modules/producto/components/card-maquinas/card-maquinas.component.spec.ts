import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaquinasComponent } from './card-maquinas.component';

describe('CardMaquinasComponent', () => {
  let component: CardMaquinasComponent;
  let fixture: ComponentFixture<CardMaquinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMaquinasComponent]
    });
    fixture = TestBed.createComponent(CardMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
