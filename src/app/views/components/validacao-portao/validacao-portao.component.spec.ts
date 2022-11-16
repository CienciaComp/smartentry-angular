import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoPortaoComponent } from './validacao-portao.component';

describe('ValidacaoPortaoComponent', () => {
  let component: ValidacaoPortaoComponent;
  let fixture: ComponentFixture<ValidacaoPortaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacaoPortaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacaoPortaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
