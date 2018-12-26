import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrObjComponent } from './entr-obj.component';

describe('EntrObjComponent', () => {
  let component: EntrObjComponent;
  let fixture: ComponentFixture<EntrObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
