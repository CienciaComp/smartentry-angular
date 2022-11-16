import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteiroCreateComponent } from './porteiro-create.component';

describe('PorteiroCreateComponent', () => {
  let component: PorteiroCreateComponent;
  let fixture: ComponentFixture<PorteiroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorteiroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteiroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
