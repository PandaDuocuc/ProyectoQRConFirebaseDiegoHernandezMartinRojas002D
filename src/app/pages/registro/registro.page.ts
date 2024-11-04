import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../firebase/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario: string = '';
  clave: string = '';
  tipo: string = 'Alumno'; // Valor por defecto

  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  isLoading: boolean = false;

  async registrar() {
    if (!this.usuario || !this.clave || !this.tipo) {
      await this.mostrarAlerta('Error', 'Todos los campos son requeridos');
      return;
    }

    this.isLoading = true;

    try {
      // Intentar registrar al usuario
      await this.authService.register(this.usuario, this.clave, this.tipo);
      await this.mostrarAlerta('Éxito', 'Usuario registrado correctamente');
      this.router.navigate(['/inicio-de-sesion']);
    } catch (error: any) {
      let mensaje = 'Ocurrió un error durante el registro';

      // Manejar errores específicos de Firebase
      if (error.code === 'auth/email-already-in-use') {
        mensaje = 'El correo electrónico ya está registrado';
      } else if (error.code === 'auth/invalid-email') {
        mensaje = 'El correo electrónico no es válido';
      } else if (error.code === 'auth/weak-password') {
        mensaje = 'La contraseña debe tener al menos 6 caracteres';
      }

      await this.mostrarAlerta('Error', mensaje);
    } finally {
      this.isLoading = false;
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
