import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaDocente2PageRoutingModule } from './detalle-asignatura-docente2-routing.module';

import { DetalleAsignaturaDocente2Page } from './detalle-asignatura-docente2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAsignaturaDocente2PageRoutingModule,
    SharedModule
  ],
  declarations: [DetalleAsignaturaDocente2Page]
})
export class DetalleAsignaturaDocente2PageModule {}
