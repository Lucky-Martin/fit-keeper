import {Component, OnInit} from '@angular/core';
import {UserService} from './setup/user.service';
import {Preferences} from '@capacitor/preferences';
import {IUser} from './setup/user.model';
import {TrackingService} from './home/tracker/tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly appearanceKey = 'APPEARANCE';

  constructor(private userService: UserService,
              private trackingService: TrackingService) { }

  async ngOnInit() {
    this.userService.userLoggedStatus.subscribe(status => {
      if (status) {
        this.syncWithDB();
      }
    });

    const {value} = await Preferences.get({key: this.appearanceKey});
    this.updateTheme(value);
  }

  async syncWithDB() {
    this.userService.fetchUserFromDatabase().subscribe(async (user: IUser | null) => {
      if (user) {
        await this.userService.createUser(user, false);
      }

      this.userService.fetchMealHistoryFromDatabase().subscribe(async mealHistory => {
        await this.trackingService.saveMealHistory(JSON.stringify(mealHistory));
        this.trackingService.foods = mealHistory[new Date().toDateString()];
      });
    });
  }

  private updateTheme(value: string) {
    switch (value) {
      case 'light_mode':
        document.body.setAttribute('color-theme', 'light');
        break;
      case 'dark_mode':
        document.body.setAttribute('color-theme', 'dark');
        break;
      default:
        value = 'light_mode';
        break;
    }
  }
}
