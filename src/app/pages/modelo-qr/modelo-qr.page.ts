import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modelo-qr',
  templateUrl: './modelo-qr.page.html',
  styleUrls: ['./modelo-qr.page.scss'],
})
export class ModeloQrPage {
  qrData: string = 'Se ha guardado su asistencia con éxito'; // Valor del QR

  constructor(
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }
}
