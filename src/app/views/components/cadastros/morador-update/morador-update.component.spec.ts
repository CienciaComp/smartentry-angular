import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorUpdateComponent } from './morador-update.component';

describe('MoradorUpdateComponent', () => {
  let component: MoradorUpdateComponent;
  let fixture: ComponentFixture<MoradorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
