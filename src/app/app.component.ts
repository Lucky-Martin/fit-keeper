import { Component } from '@angular/core';
import { UserService } from './home/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loggedIn: boolean;

  constructor(private userService: UserService) {
    this.userService.userLoggedStatus.subscribe(value => {
      this.loggedIn = value;
    });

    this.userService.fetchUser().then(value => {
      this.loggedIn = !!value;
    });
  }
}
