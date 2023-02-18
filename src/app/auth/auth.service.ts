import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async authWithGoogle() {
    try {
      return await signInWithPopup(this.auth, new GoogleAuthProvider());
    } catch (e) {
      return null;
    }
  }

  async register({email, password}) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      return null;
    }
  }

  async login({email, password}) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      return null;
    }
  }

  async logout() {
    return signOut(this.auth);
  }
}
