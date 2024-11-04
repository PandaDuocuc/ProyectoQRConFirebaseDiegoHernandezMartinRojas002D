import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../firebase/auth.service';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.page.html',
  styleUrls: ['./inicio-de-sesion.page.scss'],
})
export class InicioDeSesionPage implements OnInit {
  usuario: string = '';
  clave: string = '';
  loginFailed: boolean = false;

  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  isLoading: boolean = false;

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(
      loginFailed => this.loginFailed = loginFailed
    );
  }

  async login() {
    if (!this.usuario || !this.clave) {
      await this.mostrarAlerta('Error', 'Por favor ingrese correo y contraseña');
      return;
    }

    this.isLoading = true;

    try {
      const success = await this.authService.login(this.usuario, this.clave);

      if (success) {
        let userTypeSubscription = this.authService.getUserType().subscribe({
          next: (userType) => {
            if (userType === 'Docente') {
              this.router.navigate(['/principal-docente']);
            } else if (userType === 'Alumno') {
              this.router.navigate(['/principal-alumno']);
            }
            // Limpiar campos
            this.usuario = '';
            this.clave = '';
            // Desuscribirse después de navegar
            userTypeSubscription.unsubscribe();
          },
          error: async (error) => {
            await this.mostrarAlerta('Error', 'Error al obtener el tipo de usuario');
            this.isLoading = false;
          }
        });
      } else {
        await this.mostrarAlerta('Error', 'Credenciales incorrectas');
      }
    } catch (error: any) {
      let mensaje = 'Error al iniciar sesión';

      if (error.code === 'auth/invalid-email') {
        mensaje = 'Correo electrónico inválido';
      } else if (error.code === 'auth/user-not-found') {
        mensaje = 'Usuario no encontrado';
      } else if (error.code === 'auth/wrong-password') {
        mensaje = 'Contraseña incorrecta';
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

  irARestablecerContrasena() {
    this.router.navigate(['/restablecer-contrasena']);
  }
}
