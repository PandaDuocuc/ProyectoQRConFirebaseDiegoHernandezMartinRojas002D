import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalDocentePage } from './principal-docente.page';

describe('PrincipalDocentePage', () => {
  let component: PrincipalDocentePage;
  let fixture: ComponentFixture<PrincipalDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
