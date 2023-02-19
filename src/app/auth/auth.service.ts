import { Injectable } from '@angular/core';
import {
  Auth, GoogleAuthProvider,
  createUserWithEmailAndPassword, signInWithCredential,
  signInWithEmailAndPassword, signInWithPopup,
  signOut
} from '@angular/fire/auth';
import {Platform} from '@ionic/angular';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth,
              private afAuth: AngularFireAuth,
              private platform: Platform) {
    this.platform.ready().then(() => {
      GoogleAuth.initialize();
    });
  }

  async authWithGoogle() {
    try {
      if (this.platform.is('mobile')) {
        const googleUser = await GoogleAuth.signIn();
        const credential = GoogleAuthProvider.credential(googleUser.authentication.idToken);
        return await signInWithCredential(this.auth, credential);
        // const provider = new GoogleAuthProvider();
        // return await this.afAuth.signInWithPopup(provider);
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
