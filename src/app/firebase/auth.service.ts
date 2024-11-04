import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  private userTypeSubject = new BehaviorSubject<string>('');
  userType$ = this.userTypeSubject.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private firestoreService: FirestoreService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticatedSubject.next(true);
        this.usuarioSubject.next(user.email || '');
        this.firestoreService.getUserData(user.uid).then(userData => {
          if (userData) {
            this.userTypeSubject.next(userData.tipo);
          }
        });
      } else {
        this.isAuthenticatedSubject.next(false);
        this.usuarioSubject.next('');
        this.userTypeSubject.next('');
      }
    });
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      const userData = await this.firestoreService.getUserData(userCredential.user?.uid || '');
      if (userData) {
        this.userTypeSubject.next(userData.tipo);
      }
      this.loginFailedSubject.next(false);
      return true;
    } catch (error) {
      console.error('Error en login:', error);
      this.loginFailedSubject.next(true);
      return false;
    }
  }

  async register(email: string, password: string, tipo: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (userCredential.user) {
        await this.firestoreService.createUser({
          uid: userCredential.user.uid,
          email: email,
          tipo: tipo
        });
      }
      return true;
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.isAuthenticatedSubject.next(false);
      this.usuarioSubject.next('');
      this.loginFailedSubject.next(false);
      this.userTypeSubject.next('');
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  }

  isLoggedIn() {
    return this.isAuthenticated$;
  }

  getUserType() {
    return this.userType$;
  }
}
