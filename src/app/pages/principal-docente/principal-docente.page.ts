import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Asignatura {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-principal-docente',
  templateUrl: './principal-docente.page.html',
  styleUrls: ['./principal-docente.page.scss'],
})
export class PrincipalDocentePage {
  asignaturas: Asignatura[] = [
    { id: 1, nombre: 'Programación de aplicaciones móviles' },
    { id: 2, nombre: 'Calidad de software' }
  ];

  constructor(private router: Router) {}

  irADetalleAsignatura(asignatura: Asignatura) {
    if (asignatura.nombre === 'Programación de aplicaciones móviles') {
      this.router.navigate(['/detalle-asignatura-docente']);
    } else if (asignatura.nombre === 'Calidad de software') {
      this.router.navigate(['/detalle-asignatura-docente2']);
    } else {
      // En caso de que se añadan más asignaturas en el futuro
      console.error('Ruta no definida para esta asignatura');
    }
  }
}
