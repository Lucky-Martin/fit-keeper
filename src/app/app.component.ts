import {Component, HostListener, OnInit} from '@angular/core';
import {UserService} from './setup/user.service';
import {Preferences} from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly appearanceKey = 'APPEARANCE';

  constructor() { }

  async ngOnInit() {
    const {value} = await Preferences.get({key: this.appearanceKey});
    this.updateTheme(value);
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
