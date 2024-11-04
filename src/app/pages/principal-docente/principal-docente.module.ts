import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalDocentePageRoutingModule } from './principal-docente-routing.module';

import { PrincipalDocentePage } from './principal-docente.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalDocentePageRoutingModule,
    SharedModule
  ],
  declarations: [PrincipalDocentePage]
})
export class PrincipalDocentePageModule {}
