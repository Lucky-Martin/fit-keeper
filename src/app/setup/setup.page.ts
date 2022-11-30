import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {IonSlides, ToastController} from '@ionic/angular';
import {TrackingService} from '../home/tracker/tracking.service';
import {User} from './user.model';
import {UserService} from '../home/user/user.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements AfterViewInit {
  @ViewChild(IonSlides) private slides: IonSlides;
  private slideIndex: number = 1;
  user: User = new User();

  constructor(private toastController: ToastController,
              private userService: UserService,
              private trackingService: TrackingService,
              private router: Router) { }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  private async displayError(message: string) {
    const toast = await this.toastController.create({
      position: "bottom",
      duration: 3000,
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel'
        }
      ],
      message
    });

    await toast.present();
  }

  selectGender(gender: string) {
    this.user.gender = gender;
  }

  rangeFormat(value: number) {
    return `${value}cm`;
  }

  async nextSlide() {
    switch(this.slideIndex) {
      case 1:
        if (!this.user.gender || !this.user.name || !this.user.age) {
          return this.displayError("Please enter all required data!");
        }

        this.slideIndex = 2;
        break;
      case 2:
        if (!this.user.height || !this.user.weight) {
          return this.displayError("Please enter all required data!");
        }

        this.slideIndex = 3;
        break;
      case 3:
        await this.userService.createUser(this.user);
        this.trackingService.calculateCalorieGoal(this.user);
        this.router.navigate(['/home']);
        break;
    }

    this.slides.lockSwipes(false);
    this.slides.slideNext().then(() => {
      this.slides.lockSwipes(true);
    });
  }
}
