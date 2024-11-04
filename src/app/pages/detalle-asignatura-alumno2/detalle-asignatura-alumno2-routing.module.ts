import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAsignaturaAlumno2Page } from './detalle-asignatura-alumno2.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAsignaturaAlumno2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAsignaturaAlumno2PageRoutingModule {}
