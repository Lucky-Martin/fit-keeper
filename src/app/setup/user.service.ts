import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Preferences } from '@capacitor/preferences';
import { Subject } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | null;
  userLogged: boolean;
  userLoggedStatus: Subject<boolean> = new Subject<boolean>();
  private uid: string;
  private userStorageKey = 'USER';
  private uidKey = 'uid';

  constructor(private database: AngularFirestore) {
    this.fetchUser().then(async user => {
      this.user = user;

      if (!user) {
        this.userLogged = false;
        this.userLoggedStatus.next(false);
      }

      this.uid = await this.fetchUID();
    });
  }

  fetchUserFromDatabase() {
    return this.database.collection('users').doc(this.uid).valueChanges();
  }

  fetchMealHistoryFromDatabase() {
    return this.database.collection('mealHistory').doc(this.uid).valueChanges();
  }

  async setUID(uid: string) {
    this.uid = uid;
    await Preferences.set({key: this.uidKey, value: uid});
  }

  async fetchUID() {
    const {value} = await Preferences.get({key: this.uidKey});
    return value;
  }

  async createUser(userData: IUser, save = true) {
    const user: string = JSON.stringify(userData);

    await Preferences.set({
      key: this.userStorageKey,
      value: user
    });

    if (save) {
      await this.saveUserDataToDatabase();
    }
  }

  async fetchUser(): Promise<IUser> {
    const {value} = await Preferences.get({key: this.userStorageKey});

    return JSON.parse(value);
  }

  async updateUser(field: string, value: string | number) {
    this.user = await this.fetchUser();

    this.user[field] = value;
    await Preferences.set({key: this.userStorageKey, value: JSON.stringify(this.user)});

    await this.saveUserDataToDatabase();
  }

  async resetUser(): Promise<void> {
    this.user = null;
    await Preferences.remove({key: this.userStorageKey});
  }

  async saveUserDataToDatabase() {
    const user: IUser = await this.fetchUser();
    let {value} = await Preferences.get({key: 'MEAL_HISTORY'});

    if (!value) {
      value = '[]';
    }
    const mealHistory = JSON.parse(value);

    await this.database.collection('users').doc(this.uid).set(user);
    await this.database.collection('mealHistory').doc(this.uid).set(mealHistory);
  }
}
