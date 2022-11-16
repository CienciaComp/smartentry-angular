import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorCreateComponent } from './morador-create.component';

describe('MoradorCreateComponent', () => {
  let component: MoradorCreateComponent;
  let fixture: ComponentFixture<MoradorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
