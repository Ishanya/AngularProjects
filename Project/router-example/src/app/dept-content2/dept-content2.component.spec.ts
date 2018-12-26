import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptContent2Component } from './dept-content2.component';

describe('DeptContent2Component', () => {
  let component: DeptContent2Component;
  let fixture: ComponentFixture<DeptContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
