import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-de-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio-de-sesion',
    loadChildren: () => import('./pages/inicio-de-sesion/inicio-de-sesion.module').then( m => m.InicioDeSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'restablecer-contrasena',
    loadChildren: () => import('./pages/restablecer-contrasena/restablecer-contrasena.module').then( m => m.RestablecerContrasenaPageModule)
  },
  {
    path: 'principal-docente',
    loadChildren: () => import('./pages/principal-docente/principal-docente.module').then( m => m.PrincipalDocentePageModule)
  },
  {
    path: 'principal-alumno',
    loadChildren: () => import('./pages/principal-alumno/principal-alumno.module').then( m => m.PrincipalAlumnoPageModule)
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./pages/cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
  },
  {
    path: 'detalle-asignatura-docente',
    loadChildren: () => import('./pages/detalle-asignatura-docente/detalle-asignatura-docente.module').then( m => m.DetalleAsignaturaDocentePageModule)
  },
  {
    path: 'detalle-asignatura-docente2',
    loadChildren: () => import('./pages/detalle-asignatura-docente2/detalle-asignatura-docente2.module').then( m => m.DetalleAsignaturaDocente2PageModule)
  },
  {
    path: 'detalle-asignatura-alumno',
    loadChildren: () => import('./pages/detalle-asignatura-alumno/detalle-asignatura-alumno.module').then( m => m.DetalleAsignaturaAlumnoPageModule)
  },
  {
    path: 'detalle-asignatura-alumno2',
    loadChildren: () => import('./pages/detalle-asignatura-alumno2/detalle-asignatura-alumno2.module').then( m => m.DetalleAsignaturaAlumno2PageModule)
  },
  {
    path: 'modelo-qr',
    loadChildren: () => import('./pages/modelo-qr/modelo-qr.module').then( m => m.ModeloQrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
