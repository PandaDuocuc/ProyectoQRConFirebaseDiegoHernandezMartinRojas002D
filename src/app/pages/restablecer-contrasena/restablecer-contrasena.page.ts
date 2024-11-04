import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage {
  correo: string = '';

  constructor(private alertController: AlertController) {}

  async enviarSolicitud() {
    const alert = await this.alertController.create({
      header: 'Solicitud enviada',
      message: 'Se ha enviado la solicitud de restablecimiento.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

