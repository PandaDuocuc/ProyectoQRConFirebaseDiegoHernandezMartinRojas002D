import { Component } from '@angular/core';

interface Clase {
  dia: string;
  horaInicio: string;
  horaFin: string;
}

@Component({
  selector: 'app-detalle-asignatura-alumno',
  templateUrl: './detalle-asignatura-alumno.page.html',
  styleUrls: ['./detalle-asignatura-alumno.page.scss'],
})
export class DetalleAsignaturaAlumnoPage {
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

  escanearCodigoQR() {
    // Aquí iría la lógica para generar el código QR
    console.log('Escaneando código QR...');
  }
}
