import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAsignaturaAlumnoPage } from './detalle-asignatura-alumno.page';

describe('DetalleAsignaturaAlumnoPage', () => {
  let component: DetalleAsignaturaAlumnoPage;
  let fixture: ComponentFixture<DetalleAsignaturaAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignaturaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
