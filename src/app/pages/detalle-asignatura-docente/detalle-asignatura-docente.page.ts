import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

interface Clase {
  dia: string;
  horaInicio: string;
  horaFin: string;
}

@Component({
  selector: 'app-detalle-asignatura-docente',
  templateUrl: './detalle-asignatura-docente.page.html',
  styleUrls: ['./detalle-asignatura-docente.page.scss']
})
export class DetalleAsignaturaDocentePage {
  nombreAsignatura: string = 'Programación de aplicaciones móviles';
  clases: Clase[] = [
    { dia: 'Lunes', horaInicio: '13:01', horaFin: '14:20' },
    { dia: 'Jueves', horaInicio: '16:01', horaFin: '18:10' }
  ];
  contenidos: string[] = [
    'Experiencia de Aprendizaje 1 | Ionic Como Framework Híbrido',
    'Experiencia de Aprendizaje 2 | Los recursos son infinitos',
    'Experiencia de Aprendizaje 3 | Es hora de ver el mundo'
  ];

  constructor(private router: Router) {}

  generarCodigoQR() {
    console.log('Generando código QR...');
    this.router.navigate(['/modelo-qr']);
  }
}
