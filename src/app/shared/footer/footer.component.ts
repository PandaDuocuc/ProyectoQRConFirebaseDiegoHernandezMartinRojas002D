import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/firebase/auth.service';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(private router: Router, private authService: AuthService) {
    addIcons({ logOutOutline });
  }

  cerrarSesion() {
    this.authService.logout();  // Cerrar sesión
    this.router.navigate(['/cerrar-sesion']);  // Redirigir a la página de cierre de sesión
  }

}
