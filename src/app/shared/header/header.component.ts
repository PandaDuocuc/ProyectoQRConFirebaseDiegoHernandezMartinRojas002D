import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/firebase/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() nombreUsuario: string = '';
  @Input() mostrarBienvenida: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.usuario$.subscribe(usuario => {
      this.nombreUsuario = usuario;
    });
  }
}
