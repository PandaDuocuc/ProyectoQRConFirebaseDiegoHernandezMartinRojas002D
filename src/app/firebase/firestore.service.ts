import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Usuario {
  uid: string;
  email: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  async createUser(userData: Usuario) {
    try {
      await this.afs.doc(`usuarios/${userData.uid}`).set(userData);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async getUserData(uid: string) {
    try {
      const doc = await this.afs.doc(`usuarios/${uid}`).get().toPromise();
      return doc?.data() as Usuario | undefined;
    } catch (error) {
      console.error('Error getting user data:', error);
      throw error;
    }
  }

  async checkUserExists(email: string): Promise<boolean> {
    try {
      const querySnapshot = await this.afs.collection('usuarios', ref =>
        ref.where('email', '==', email)
      ).get().toPromise();
      return querySnapshot?.empty === false;
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw error;
    }
  }
}
