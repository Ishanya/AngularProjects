import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEnterComponent } from './emp-enter.component';

describe('EmpEnterComponent', () => {
  let component: EmpEnterComponent;
  let fixture: ComponentFixture<EmpEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
