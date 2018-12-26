import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrntObjComponent } from './prnt-obj.component';

describe('PrntObjComponent', () => {
  let component: PrntObjComponent;
  let fixture: ComponentFixture<PrntObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrntObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrntObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
