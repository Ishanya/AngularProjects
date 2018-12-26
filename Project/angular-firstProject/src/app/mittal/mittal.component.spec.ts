import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MittalComponent } from './mittal.component';

describe('MittalComponent', () => {
  let component: MittalComponent;
  let fixture: ComponentFixture<MittalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MittalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MittalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
