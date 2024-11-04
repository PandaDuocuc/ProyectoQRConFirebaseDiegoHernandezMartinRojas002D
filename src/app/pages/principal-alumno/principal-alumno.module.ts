import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalAlumnoPageRoutingModule } from './principal-alumno-routing.module';

import { PrincipalAlumnoPage } from './principal-alumno.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalAlumnoPageRoutingModule,
    SharedModule
  ],
  declarations: [PrincipalAlumnoPage]
})
export class PrincipalAlumnoPageModule {}
