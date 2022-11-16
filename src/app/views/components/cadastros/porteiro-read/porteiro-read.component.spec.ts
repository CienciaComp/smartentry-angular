import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteiroReadComponent } from './porteiro-read.component';

describe('PorteiroReadComponent', () => {
  let component: PorteiroReadComponent;
  let fixture: ComponentFixture<PorteiroReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorteiroReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteiroReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
