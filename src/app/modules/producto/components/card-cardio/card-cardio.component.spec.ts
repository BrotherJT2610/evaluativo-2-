import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCardioComponent } from './card-cardio.component';

describe('CardCardioComponent', () => {
  let component: CardCardioComponent;
  let fixture: ComponentFixture<CardCardioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCardioComponent]
    });
    fixture = TestBed.createComponent(CardCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
