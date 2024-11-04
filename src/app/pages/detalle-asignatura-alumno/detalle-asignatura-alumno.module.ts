import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaAlumnoPageRoutingModule } from './detalle-asignatura-alumno-routing.module';

import { DetalleAsignaturaAlumnoPage } from './detalle-asignatura-alumno.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAsignaturaAlumnoPageRoutingModule,
    SharedModule
  ],
  declarations: [DetalleAsignaturaAlumnoPage]
})
export class DetalleAsignaturaAlumnoPageModule {}
