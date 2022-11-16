import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesUpdateComponent } from './visitantes-update.component';

describe('VisitantesUpdateComponent', () => {
  let component: VisitantesUpdateComponent;
  let fixture: ComponentFixture<VisitantesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
