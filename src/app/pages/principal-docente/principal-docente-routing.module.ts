import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalDocentePage } from './principal-docente.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalDocentePageRoutingModule {}
