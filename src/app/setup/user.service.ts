import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Preferences } from '@capacitor/preferences';
import { Subject } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {WeightTrackingService} from '../home/weight-tracker/weight-tracking.service';

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

  constructor(private database: AngularFirestore,
              private weightTrackingService: WeightTrackingService) {
    this.fetchUser().then(async user => {
      this.user = user;
      this.uid = await this.fetchUID();

      if (!(window.location.href.indexOf('setup') > -1 || window.location.href.indexOf('auth') > -1)) {
        this.userLogged = !!this.user;
        this.userLoggedStatus.next(this.userLogged);
      }
    });
  }

  fetchUserFromDatabase() {
    return this.database.collection('users').doc(this.uid).valueChanges();
  }

  fetchMealHistoryFromDatabase() {
    return this.database.collection('mealHistory').doc(this.uid).valueChanges();
  }

  fetchWeightProgressFromDatabase() {
    return this.database.collection('weightProgress').doc(this.uid).valueChanges();
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

  async saveUserDataToDatabase(setInit = false) {
    const user: IUser = await this.fetchUser();
    if (setInit) {
      user.init = true;
    }

    const weightProgress = await this.weightTrackingService.getWeightRecords();
    let {value} = await Preferences.get({key: 'MEAL_HISTORY'});

    if (!value) {
      value = '[]';
    }
    const mealHistory = JSON.parse(value);

    await this.database.collection('users').doc(this.uid).set(user);
    await this.database.collection('mealHistory').doc(this.uid).set(mealHistory);
    await this.database.collection('weightProgress').doc(this.uid).set({data: weightProgress});
  }
}
