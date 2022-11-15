import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Preferences } from '@capacitor/preferences';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  private USER_STORAGE_KEY = "user";
  user: IUser | null;

  constructor(private router: Router) { }

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

  async resetUser(): Promise<void> {
    await Preferences.remove({key: this.USER_STORAGE_KEY});
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Observable<boolean>((observer) => {
      this.fetchUser().then((value: IUser | null) => {
        if (value) {
          observer.next(true);
        } else {
          this.router.navigate(['setup']);
          observer.next(false);
        }
      });
    });
  }
}
