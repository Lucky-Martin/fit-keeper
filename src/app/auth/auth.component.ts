import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {LoadingController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../setup/user.service';
import {IUser} from '../setup/user.model';
import {TrackingService} from '../home/tracker/tracking.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  credentials: FormGroup;
  authMode: string;

  constructor(private fb: FormBuilder,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private userService: UserService,
              private trackingService: TrackingService) { }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]
    });

    this.route.queryParams.subscribe(async params => {
      this.authMode = params.authMode;

      if (!this.authMode) {
        await this.router.navigate(['auth'], {queryParams: {
          authMode: 'register'
        }});
      }
    });
  }

  async authorizeUser(mode: string) {
    const loading = await this.loadingController.create();
    await loading.present();

    let user;
    if (mode === 'register') {
      user = await this.authService.register(this.credentials.value);
    } else {
      user = await this.authService.login(this.credentials.value);
    }
    await loading.dismiss();

    if (user) {
      await this.userService.setUID(user.user.uid);

      this.userService.fetchUserFromDatabase().subscribe(async (fetchedUser: IUser | null) => {
        if (fetchedUser) {
          await this.userService.createUser(fetchedUser, false);

          this.userService.fetchMealHistoryFromDatabase().subscribe(async mealHistory => {
            await this.trackingService.saveMealHistory(JSON.stringify(mealHistory));
            this.trackingService.foods = mealHistory[new Date().toDateString()];
            await this.trackingService.saveCurrentDayFoods();
            await this.router.navigateByUrl('/home', {replaceUrl: true});
          });
        } else {
          await this.router.navigateByUrl('/home', {replaceUrl: true});
        }
      });
    } else {
      const errKeyword = mode === 'register' ? 'регистрация' : 'вход';
      const toast = await this.toastController.create({
        message: `Грешка при ${errKeyword}. Опитайте отново!`,
        duration: 5000
      });

      await toast.present();
    }
  }
}
