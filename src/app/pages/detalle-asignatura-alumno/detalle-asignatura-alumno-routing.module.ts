import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAsignaturaAlumnoPage } from './detalle-asignatura-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAsignaturaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAsignaturaAlumnoPageRoutingModule {}
