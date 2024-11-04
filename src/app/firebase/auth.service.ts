import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// Interfaz para el tipo de usuario
interface Usuario {
  email: string;
  tipo: string;
  nombreUsuario: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario = new BehaviorSubject<string>('');
  usuario$ = this.usuario.asObservable();
  loginFailed$ = new BehaviorSubject<boolean>(false);

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    // Observar cambios en el estado de autenticación
    this.auth.authState.subscribe(user => {
      if (user) {
        // Si hay un usuario autenticado, obtener sus datos de Firestore
        this.getUserData(user.uid).subscribe(userData => {
          if (userData) {
            this.usuario.next(userData.nombreUsuario);
          }
        });
      } else {
        // Si no hay usuario autenticado, resetear el nombre de usuario
        this.usuario.next('');
      }
    });
  }

  // Método para registrar un nuevo usuario
  async register(email: string, password: string, tipo: string, nombreUsuario: string) {
    try {
      // Crear el usuario en Firebase Authentication
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);

      if (userCredential.user) {
        // Guardar la información adicional del usuario en Firestore
        await this.firestore.collection('usuarios').doc(userCredential.user.uid).set({
          email,
          tipo,
          nombreUsuario,
          uid: userCredential.user.uid
        });
      }
      return userCredential;
    } catch (error) {
      throw error;
    }
  }

  // Método para iniciar sesión
  async login(email: string, password: string): Promise<boolean> {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      if (result.user) {
        // Obtener los datos del usuario desde Firestore usando firstValueFrom
        const userData = await new Promise<Usuario | null>((resolve) => {
          this.getUserData(result.user!.uid).subscribe(data => {
            resolve(data || null); // Convertimos undefined a null
          });
        });

        if (userData) {
          this.usuario.next(userData['nombreUsuario']);
        }
        this.loginFailed$.next(false);
        return true;
      }
      this.loginFailed$.next(true);
      return false;
    } catch (error) {
      this.loginFailed$.next(true);
      throw error;
    }
  }

  // Método para cerrar sesión
  async logout() {
    try {
      await this.auth.signOut();
      this.usuario.next('');
      return true;
    } catch (error) {
      throw error;
    }
  }

  // Método para obtener el tipo de usuario (Docente/Alumno)
  getUserType(): Observable<string> {
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.collection('usuarios').doc<Usuario>(user.uid).valueChanges().pipe(
            map(userData => userData || null) // Convertimos undefined a null
          );
        }
        return of(null);
      }),
      map((userDoc: Usuario | null) => userDoc?.tipo || '')
    );
  }

  // Método para obtener los datos del usuario desde Firestore
  getUserData(uid: string): Observable<Usuario | null> {
    return this.firestore.collection('usuarios').doc<Usuario>(uid).valueChanges().pipe(
      map(userData => userData || null) // Convertimos undefined a null
    );
  }

  // Método para verificar si hay un usuario autenticado
  isAuthenticated(): Observable<boolean> {
    return this.auth.authState.pipe(
      map(user => user !== null)
    );
  }

  // Método para obtener el ID del usuario actual
  getCurrentUserId(): Promise<string | null> {
    return new Promise((resolve) => {
      this.auth.authState.subscribe(user => {
        resolve(user ? user.uid : null);
      });
    });
  }

  // Método para restablecer la contraseña
  async resetPassword(email: string) {
    try {
      await this.auth.sendPasswordResetEmail(email);
      return true;
    } catch (error) {
      throw error;
    }
  }

  // Método para actualizar el nombre de usuario
  async updateUserName(uid: string, newUserName: string) {
    try {
      await this.firestore.collection('usuarios').doc(uid).update({
        nombreUsuario: newUserName
      });
      this.usuario.next(newUserName);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
