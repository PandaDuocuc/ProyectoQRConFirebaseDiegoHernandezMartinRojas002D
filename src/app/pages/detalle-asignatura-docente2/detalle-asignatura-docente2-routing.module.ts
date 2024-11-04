import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAsignaturaDocente2Page } from './detalle-asignatura-docente2.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAsignaturaDocente2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAsignaturaDocente2PageRoutingModule {}
