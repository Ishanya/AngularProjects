import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPrintComponent } from './emp-print.component';

describe('EmpPrintComponent', () => {
  let component: EmpPrintComponent;
  let fixture: ComponentFixture<EmpPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
