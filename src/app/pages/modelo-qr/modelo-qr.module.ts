import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeloQrPageRoutingModule } from './modelo-qr-routing.module';

import { ModeloQrPage } from './modelo-qr.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeloQrPageRoutingModule,
    SharedModule,
    QRCodeModule
  ],
  declarations: [ModeloQrPage]
})
export class ModeloQrPageModule {}
