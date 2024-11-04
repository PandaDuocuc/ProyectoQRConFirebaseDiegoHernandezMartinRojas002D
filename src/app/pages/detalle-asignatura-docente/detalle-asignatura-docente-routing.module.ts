import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAsignaturaDocentePage } from './detalle-asignatura-docente.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAsignaturaDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAsignaturaDocentePageRoutingModule {}
