import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeloQrPage } from './modelo-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ModeloQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeloQrPageRoutingModule {}
