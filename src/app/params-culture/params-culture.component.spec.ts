import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsCultureComponent } from './params-culture.component';

describe('ParamsCultureComponent', () => {
  let component: ParamsCultureComponent;
  let fixture: ComponentFixture<ParamsCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
