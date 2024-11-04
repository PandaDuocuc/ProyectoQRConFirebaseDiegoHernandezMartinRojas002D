import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAsignaturaDocente2Page } from './detalle-asignatura-docente2.page';

describe('DetalleAsignaturaDocente2Page', () => {
  let component: DetalleAsignaturaDocente2Page;
  let fixture: ComponentFixture<DetalleAsignaturaDocente2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignaturaDocente2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
