import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAsignaturaDocentePage } from './detalle-asignatura-docente.page';

describe('DetalleAsignaturaDocentePage', () => {
  let component: DetalleAsignaturaDocentePage;
  let fixture: ComponentFixture<DetalleAsignaturaDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignaturaDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
