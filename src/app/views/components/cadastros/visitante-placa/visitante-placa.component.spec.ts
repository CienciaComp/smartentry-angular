import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantePlacaComponent } from './visitante-placa.component';

describe('VisitantePlacaComponent', () => {
  let component: VisitantePlacaComponent;
  let fixture: ComponentFixture<VisitantePlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantePlacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantePlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
