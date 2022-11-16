import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorReadComponent } from './morador-read.component';

describe('MoradorReadComponent', () => {
  let component: MoradorReadComponent;
  let fixture: ComponentFixture<MoradorReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
