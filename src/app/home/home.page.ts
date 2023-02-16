 import {Component, OnInit} from '@angular/core';
import {Macros} from './tracker/food.model';
import {TrackingService} from './tracker/tracking.service';
import {UserService} from '../setup/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  macros: Macros;
  username: string;
  slideOpts = {
    scrollbar: true,
    slidesPerView: 1.2
  };

  constructor(private trackingService: TrackingService,
              private userService: UserService) {
    this.trackingService.getMacrosAsObservable().subscribe((value: Macros) => {
      this.macros = value;
    });
    this.userService.fetchUser().then(value => {
      this.username = value.name;
    });
  }

  async ngOnInit() {
    this.macros = await this.trackingService.getMacros();
    console.log(this.macros);
  }
}
