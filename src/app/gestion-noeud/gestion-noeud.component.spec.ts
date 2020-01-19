import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNoeudComponent } from './gestion-noeud.component';

describe('GestionNoeudComponent', () => {
  let component: GestionNoeudComponent;
  let fixture: ComponentFixture<GestionNoeudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionNoeudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNoeudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
