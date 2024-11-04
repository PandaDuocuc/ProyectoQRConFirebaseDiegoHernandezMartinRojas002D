import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaAlumno2PageRoutingModule } from './detalle-asignatura-alumno2-routing.module';

import { DetalleAsignaturaAlumno2Page } from './detalle-asignatura-alumno2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAsignaturaAlumno2PageRoutingModule,
    SharedModule
  ],
  declarations: [DetalleAsignaturaAlumno2Page]
})
export class DetalleAsignaturaAlumno2PageModule {}
