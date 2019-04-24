import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishSelectComponent } from './finish-select.component';

describe('FinishSelectComponent', () => {
  let component: FinishSelectComponent;
  let fixture: ComponentFixture<FinishSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
