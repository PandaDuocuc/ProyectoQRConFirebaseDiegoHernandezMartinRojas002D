import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalAlumnoPage } from './principal-alumno.page';

describe('PrincipalAlumnoPage', () => {
  let component: PrincipalAlumnoPage;
  let fixture: ComponentFixture<PrincipalAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
