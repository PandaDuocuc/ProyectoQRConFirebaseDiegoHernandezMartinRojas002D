import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

interface Clase {
  dia: string;
  horaInicio: string;
  horaFin: string;
}

@Component({
  selector: 'app-detalle-asignatura-docente2',
  templateUrl: './detalle-asignatura-docente2.page.html',
  styleUrls: ['./detalle-asignatura-docente2.page.scss'],
})
export class DetalleAsignaturaDocente2Page {
  nombreAsignatura: string = 'Calidad de software';
  clases: Clase[] = [
    { dia: 'Miércoles', horaInicio: '13:01', horaFin: '15:50' }
  ];
  contenidos: string[] = [
    'Experiencia de Aprendizaje 1 - Aseguramiento de calidad del software: Conceptos, pruebas y planificación',
    'Experiencia de Aprendizaje 2 - Garantizando la calidad del software: Aplicación de conceptos y diseño de casos de prueba efectivos',
    'Experiencia de Aprendizaje 3 - Optimizando la ejecución de pruebas: Técnicas, seguridad y documentación para garantizar la calidad del software'
  ];

  constructor(private router: Router) {}

  generarCodigoQR() {
    console.log('Generando código QR...');
    this.router.navigate(['/modelo-qr']);
  }
}
