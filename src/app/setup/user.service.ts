import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Preferences } from '@capacitor/preferences';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  user: IUser | null;
  userLoggedStatus: Subject<boolean> = new Subject<boolean>();
  private USER_STORAGE_KEY = 'user';

  constructor(private router: Router) {
    this.fetchUser().then(user => {
      this.user = user;
    });
  }

  async createUser(userData: IUser) {
    const user: string = JSON.stringify(userData);

    await Preferences.set({
      key: this.USER_STORAGE_KEY,
      value: user
    });
  }

  async fetchUser(): Promise<IUser> {
    const {value} = await Preferences.get({key: this.USER_STORAGE_KEY});

    return JSON.parse(value);
  }

  async updateUser(field: string, value: string | number) {
    this.user = await this.fetchUser();
    
    this.user[field] = value;
    await Preferences.set({key: this.USER_STORAGE_KEY, value: JSON.stringify(this.user)});
  }

  async resetUser(): Promise<void> {
    this.user = null;
    await Preferences.remove({key: this.USER_STORAGE_KEY});
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Observable<boolean>((observer) => {
      this.fetchUser().then((value: IUser | null) => {
        if (value) {
          this.userLoggedStatus.next(true);
          observer.next(true);
        } else {
          this.router.navigate(['setup']);
          observer.next(false);
        }
      });
    });
  }
}
