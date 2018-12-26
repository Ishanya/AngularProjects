import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptContent3Component } from './dept-content3.component';

describe('DeptContent3Component', () => {
  let component: DeptContent3Component;
  let fixture: ComponentFixture<DeptContent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptContent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
