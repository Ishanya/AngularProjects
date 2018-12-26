import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptContent4Component } from './dept-content4.component';

describe('DeptContent4Component', () => {
  let component: DeptContent4Component;
  let fixture: ComponentFixture<DeptContent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptContent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
