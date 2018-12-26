import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptContentComponent } from './dept-content.component';

describe('DeptContentComponent', () => {
  let component: DeptContentComponent;
  let fixture: ComponentFixture<DeptContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
