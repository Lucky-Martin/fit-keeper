import { Injectable } from '@angular/core';
import {
  Auth, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signInWithPopup,
  signOut
} from '@angular/fire/auth';
import {Platform} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth,
              private platform: Platform) { }

  async authWithGoogle() {
    try {
      if (this.platform.is('mobile')) {
        // const provider = new GoogleAuthProvider();
        // return await this.afAuth.signInWithPopup(provider);
        return null;
      } else {
        return await signInWithPopup(this.auth, new GoogleAuthProvider());
      }
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
